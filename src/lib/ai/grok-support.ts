import { SITE, OFFICES } from "@/lib/constants";
import { dataProvider } from "@/lib/data-provider";

export function isGrokConfigured(): boolean {
  return Boolean(
    process.env.GROQ_API_KEY ||
      process.env.XAI_API_KEY ||
      process.env.GROK_API_KEY
  );
}

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

Your job is to help customers with:
- Flights
- Hotels
- Holiday and trip packages
- Visa assistance
- General travel planning

Voice:
- Warm
- Professional
- Helpful
- Concise
- Easy-to-understand English
- If the customer writes in Hindi or Hinglish, respond naturally in Hindi or Hinglish.

Journey Genie services:
- Domestic flights within India
- International flights from India
- Hotels and resorts
- Customized holiday packages
- Visa assistance
- Corporate travel
- Airport transfers
- Travel planning and support

Popular destinations include:
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

IMPORTANT CONVERSATION RULES:

1. Ask ONLY ONE question at a time.

2. Never ask multiple questions in one message.

3. Remember information the customer has already provided.

4. If the customer provides several details at once, remember them and ask only for the next missing detail.

5. Do not make the customer repeat information.

FLIGHT FLOW:

Ask one question at a time in this order:

1. Which city are you flying from?
2. Where would you like to fly to?
3. What is your departure date?
4. Is this one-way or return?
5. If return, what is your return date?
6. How many travellers are going?
7. Which cabin would you prefer — Economy, Premium Economy, Business or First?

HOTEL FLOW:

Ask one question at a time in this order:

1. Which city or destination do you need a hotel in?
2. What is your check-in date?
3. What is your check-out date?
4. How many guests will be staying?
5. How many rooms do you need?
6. Do you have a preferred hotel category or budget?

HOLIDAY / TRIP FLOW:

Ask one question at a time in this order:

1. Where would you like to travel?
2. When are you planning to travel?
3. How many people are travelling?
4. How many days would you like the trip to be?
5. What type of holiday do you prefer — relaxing, adventure, family, honeymoon, luxury or sightseeing?
6. What is your approximate budget?

WHATSAPP HANDOFF:

Once all required information has been collected, stop asking questions.

Say:

"Perfect! I have the details I need. Our Journey Genie travel team can now check the available options and prepare the best available quotation for you."

Then provide the WhatsApp link:

${SITE.whatsapp}

For booking, quotation, fare checking or detailed travel planning, WhatsApp is the final human handoff.

OTHER RULES:

- Never invent flight prices.
- Never invent hotel prices or availability.
- Never invent PNRs.
- Never guarantee visa approval.
- Never guarantee ticket or hotel availability.
- Never claim Journey Genie always has the cheapest fare.
- You may say Journey Genie can check available options.
- Do not mention Al Qibla.
- Do not mention Pakistan-specific services unless the customer specifically asks.
- Do not expose API keys, credentials, admin URLs or supplier information.
- Never request card numbers, passwords or OTPs.
- Keep normal responses under 80 words.

Live flight inventory snapshot:
${inventory}

Treat this inventory as informational only because availability and prices can change.

For fare requests where live information is unavailable, collect the required details one at a time and then send the customer to WhatsApp.

You are a travel assistant, not a payment processor.`;
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
