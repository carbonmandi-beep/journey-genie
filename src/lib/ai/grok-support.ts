import { SITE, OFFICES } from "@/lib/constants";
import { dataProvider } from "@/lib/data-provider";

export function isGrokConfigured(): boolean {
  return Boolean(process.env.GROQ_API_KEY || process.env.XAI_API_KEY || process.env.GROK_API_KEY);
}

/**
 * Prefer Groq because Journey Genie is using the free Groq setup.
 */
function getGrokApiKey(): string | null {
  return (
    process.env.GROQ_API_KEY ||
    process.env.XAI_API_KEY ||
    process.env.GROK_API_KEY ||
    null
  );
}

function resolveApiBase(apiKey: string): string {
  if (process.env.GROK_API_BASE) {
    return process.env.GROK_API_BASE.replace(/\/$/, "");
  }

  if (apiKey.startsWith("gsk_")) {
    return "https://api.groq.com/openai/v1";
  }

  return "https://api.x.ai/v1";
}

function resolveModel(apiKey: string): string {
  const configured =
    process.env.GROQ_MODEL ||
    process.env.GROK_MODEL ||
    process.env.XAI_MODEL ||
    "";

  const isGroq = apiKey.startsWith("gsk_");

  if (isGroq) {
    // Current Groq production/free-tier friendly model.
    return configured || "openai/gpt-oss-20b";
  }

  return configured || "grok-4.5";
}

async function buildInventoryBrief(): Promise<string> {
  try {
    const tickets = await dataProvider.getTickets();

    const live = tickets
      .filter((t) => t.status !== "sold_out" && t.seatsLeft > 0)
      .slice(0, 12)
      .map(
        (t) =>
          `${t.airline} ${t.flightNumber || ""} | ${t.from}→${t.to} | ${t.date} | ${t.price.toLocaleString()} ${t.currency} | ${t.seatsLeft} seats`
      );

    if (!live.length) {
      return "No live flight inventory is currently available.";
    }

    return live.join("\n");
  } catch {
    return "Live flight inventory is unavailable right now. Guide the customer to WhatsApp for a live fare check.";
  }
}

export async function buildSupportSystemPrompt(): Promise<string> {
  const inventory = await buildInventoryBrief();

  return `You are Journey Genie Assistant — the official AI travel support assistant for ${SITE.name} (${SITE.url}).

Your job is to help customers with flights, hotels, holiday packages, visa assistance and travel planning.

Voice:
- Warm
- Professional
- Helpful
- Concise
- Easy-to-understand English
- If the customer writes in Hindi, Hinglish or another Indian language, respond naturally in that language where appropriate.

Journey Genie services:
- Domestic flights within India
- International flights from India
- Hotels and resorts
- Customized holiday packages
- Visa assistance
- Corporate travel
- Airport transfers
- Travel planning and support

India-first positioning:
- Delhi
- Mumbai
- Bengaluru
- Hyderabad
- Chennai
- Kolkata
- Amritsar
- Chandigarh
- Ahmedabad
- Pune
- Goa
- Other Indian cities

Popular international destinations:
- Dubai
- Abu Dhabi
- Singapore
- Bali
- Bangkok
- Phuket
- Maldives
- London
- Paris
- Istanbul
- Europe
- Australia
- USA
- Canada
- Worldwide destinations

Business information:
- WhatsApp: ${SITE.whatsappNumber}
- WhatsApp link: ${SITE.whatsapp}
- Email: ${SITE.email}
- Head office phone: ${OFFICES.headOffice.phone}
- Business hours: ${SITE.businessHours}
- Regions served: ${SITE.regions.join(", ")}

Important:
Journey Genie is WhatsApp-first for quotations and bookings.

If a customer wants to:
- Check a flight fare
- Compare a fare
- Book a flight
- Book a hotel
- Get a holiday quotation
- Ask about visa assistance
- Speak to a travel expert

direct them to WhatsApp:
${SITE.whatsapp}

Live inventory snapshot:
${inventory}

Rules:
1. Never invent flight prices, seat availability, PNRs, visa approvals or hotel availability.
2. Live inventory can change, so treat the inventory above as informational only.
3. If the customer asks for a specific fare that is not available in the inventory, ask them to send the route and date on WhatsApp.
4. Never claim that Journey Genie always has the cheapest fare.
5. You may say that Journey Genie can check available fare options.
6. Do not mention Al Qibla anywhere.
7. Do not mention Pakistan-specific offices, routes or services unless the customer specifically asks.
8. Do not expose API keys, credentials, admin URLs or supplier information.
9. Keep normal answers under 120 words.
10. Give one clear next step at the end.
11. For booking or quotation requests, use WhatsApp as the primary CTA.
12. For fare checking, ask for:
   - From city
   - To city
   - Travel date
   - Return date if applicable
   - Number of travellers
   - Cabin class if relevant

Example CTA:
"Send these details to Journey Genie on WhatsApp and our travel team can check the available options for you."

You are a travel assistant, not a payment processor. Never request card numbers, passwords, OTPs or other sensitive financial credentials.`;
}

export async function chatWithGrok(
  messages: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>
) {
  const apiKey = getGrokApiKey();

  if (!apiKey) {
    return {
      ok: false as const,
      error: "Support chat is not configured yet. Please WhatsApp us instead.",
    };
  }

  const system = await buildSupportSystemPrompt();
  const model = resolveModel(apiKey);
  const base = resolveApiBase(apiKey);

  const res = await fetch(`${base}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.5,
      max_tokens: 700,
      messages: [
        {
          role: "system",
          content: system,
        },
        ...messages,
      ],
    }),
  });

  const data = (await res.json().catch(() => ({}))) as {
    choices?: Array<{
      message?: {
        content?: string;
      };
    }>;
    error?: {
      message?: string;
    } | string;
  };

  if (!res.ok) {
    const errMsg =
      typeof data.error === "string"
        ? data.error
        : data.error?.message ||
          `Support chat unavailable (${res.status}). Try WhatsApp.`;

    return {
      ok: false as const,
      error: errMsg,
    };
  }

  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    return {
      ok: false as const,
      error: "Empty reply from assistant. Please try again or WhatsApp us.",
    };
  }

  return {
    ok: true as const,
    content,
  };
}
