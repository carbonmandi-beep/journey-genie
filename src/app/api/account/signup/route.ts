import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail, getAuthFromEmail, isEmailConfigured } from "@/lib/email/resend";
import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const dynamic = "force-dynamic";

const signupSchema = z.object({
  companyName: z.string().trim().min(2).max(160),
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(40),
  email: z.string().trim().email().max(200),
  city: z.string().trim().min(2).max(80),
  address: z.string().trim().min(8).max(400),
  password: z.string().min(8).max(200),
  nextPath: z.string().trim().max(300).optional(),
});

function siteOrigin() {
  const raw = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://journey-genie-seven.vercel.app"
  ).replace(/\/$/, "");

  return raw;
}

function safeNextPath(nextPath?: string) {
  if (!nextPath || !nextPath.startsWith("/") || nextPath.startsWith("//")) {
    return "/account/";
  }

  return nextPath;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function adminSignupEmailHtml({
  companyName,
  fullName,
  email,
  phone,
  city,
  address,
}: {
  companyName: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#10264a;">
        <div style="max-width:700px;margin:30px auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;">
          
          <div style="background:#10264a;padding:28px 32px;">
            <h1 style="margin:0;color:#ffffff;font-size:26px;">
              Journey Genie
            </h1>
            <p style="margin:8px 0 0;color:#d9a441;font-size:14px;font-weight:bold;letter-spacing:1px;">
              NEW AGENT REGISTRATION
            </p>
          </div>

          <div style="padding:32px;">
            <h2 style="margin-top:0;">
              New customer / travel agent signup
            </h2>

            <p>
              A new agency has submitted an account application on Journey Genie.
            </p>

            <table style="width:100%;border-collapse:collapse;margin-top:24px;">
              
              <tr>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;font-weight:bold;width:35%;">
                  Company / Agency
                </td>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;">
                  ${escapeHtml(companyName)}
                </td>
              </tr>

              <tr>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;font-weight:bold;">
                  Contact Person
                </td>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;">
                  ${escapeHtml(fullName)}
                </td>
              </tr>

              <tr>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;font-weight:bold;">
                  Email
                </td>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;">
                  ${escapeHtml(email)}
                </td>
              </tr>

              <tr>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;font-weight:bold;">
                  Phone / WhatsApp
                </td>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;">
                  ${escapeHtml(phone)}
                </td>
              </tr>

              <tr>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;font-weight:bold;">
                  City
                </td>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;">
                  ${escapeHtml(city)}
                </td>
              </tr>

              <tr>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;font-weight:bold;">
                  Company Address
                </td>
                <td style="padding:12px;border-bottom:1px solid #eeeeee;">
                  ${escapeHtml(address)}
                </td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;">
                  Approval Status
                </td>
                <td style="padding:12px;color:#b7791f;font-weight:bold;">
                  PENDING ADMIN APPROVAL
                </td>
              </tr>

            </table>

            <div style="margin-top:28px;padding:16px;background:#f8f3e9;border-radius:10px;">
              <strong>Next step:</strong>
              Review this agency in the Journey Genie admin system and approve the account if appropriate.
            </div>

            <p style="margin-top:28px;color:#6b7280;font-size:13px;">
              This notification was generated automatically by Journey Genie.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  /*
   * ---------------------------------------------------------
   * 1. CHECK SUPABASE
   * ---------------------------------------------------------
   */

  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      {
        error: "Journey Genie account service is not configured.",
      },
      { status: 503 }
    );
  }

  /*
   * ---------------------------------------------------------
   * 2. CHECK EMAIL CONFIGURATION
   * ---------------------------------------------------------
   */

  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        error:
          "Journey Genie email is not configured. Please configure RESEND_API_KEY and AUTH_FROM_EMAIL in Vercel.",
      },
      { status: 503 }
    );
  }

  /*
   * ---------------------------------------------------------
   * 3. CHECK ADMIN EMAIL
   * ---------------------------------------------------------
   */

  const adminEmail = process.env.ADMIN_EMAIL?.trim();

  if (!adminEmail) {
    return NextResponse.json(
      {
        error:
          "ADMIN_EMAIL is not configured. Add your Journey Genie admin email in Vercel Environment Variables.",
      },
      { status: 503 }
    );
  }

  /*
   * ---------------------------------------------------------
   * 4. READ REQUEST
   * ---------------------------------------------------------
   */

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: "Invalid request body.",
      },
      { status: 400 }
    );
  }

  /*
   * ---------------------------------------------------------
   * 5. VALIDATE CUSTOMER DATA
   * ---------------------------------------------------------
   */

  const parsed = signupSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error:
          "Please provide company name, contact person, phone, email, city, full address and password.",
      },
      { status: 400 }
    );
  }

  const {
    companyName,
    fullName,
    phone,
    email,
    city,
    address,
    password,
    nextPath,
  } = parsed.data;

  /*
   * ---------------------------------------------------------
   * 6. CREATE LOGIN / VERIFICATION LINK
   * ---------------------------------------------------------
   */

  const redirectTo =
    `${siteOrigin()}/account/login/?next=` +
    encodeURIComponent(safeNextPath(nextPath));

  const admin = createAdminClient();

  const { data: linkData, error: linkError } =
    await admin.auth.admin.generateLink({
      type: "signup",
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone,
          company_name: companyName,
          city,
          address,
          role: "agent",
        },
        redirectTo,
      },
    });

  /*
   * ---------------------------------------------------------
   * 7. HANDLE EXISTING ACCOUNT
   * ---------------------------------------------------------
   */

  if (linkError) {
    const msg = linkError.message.toLowerCase();

    if (
      msg.includes("already") ||
      msg.includes("registered") ||
      msg.includes("exists")
    ) {
      return NextResponse.json(
        {
          error:
            "An account with this email already exists. Please sign in instead.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        error: linkError.message,
      },
      { status: 400 }
    );
  }

  /*
   * ---------------------------------------------------------
   * 8. GET VERIFICATION LINK
   * ---------------------------------------------------------
   */

  const confirmUrl = linkData.properties?.action_link;

  if (
    !confirmUrl ||
    typeof confirmUrl !== "string" ||
    !confirmUrl.startsWith("http")
  ) {
    return NextResponse.json(
      {
        error:
          "Could not create a verification link. Please try again or contact Journey Genie support.",
      },
      { status: 500 }
    );
  }

  /*
   * ---------------------------------------------------------
   * 9. STORE CUSTOMER PROFILE IN SUPABASE
   * ---------------------------------------------------------
   */

  const userId = linkData.user?.id;

  if (!userId) {
    return NextResponse.json(
      {
        error:
          "Customer account was not created correctly. Please try again.",
      },
      { status: 500 }
    );
  }

  const { error: profileError } = await admin
    .from("customer_profiles")
    .upsert({
      id: userId,
      email,
      full_name: fullName,
      phone,
      company_name: companyName,
      city,
      address,
      role: "agent",
      approval_status: "pending",
    });

  /*
   * IMPORTANT:
   * If the database fails, do not pretend the signup was successful.
   */

  if (profileError) {
    console.error(
      "Journey Genie customer profile error:",
      profileError
    );

    return NextResponse.json(
      {
        error:
          "Your account could not be saved correctly. Please try again or contact Journey Genie support.",
      },
      { status: 500 }
    );
  }

  /*
   * ---------------------------------------------------------
   * 10. SEND VERIFICATION EMAIL TO CUSTOMER
   * ---------------------------------------------------------
   */

  const mailed = await sendEmail({
    to: email,
    from: getAuthFromEmail(),
    replyTo: adminEmail,
    subject: "Verify your Journey Genie account",
    html: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#10264a;">
          <div style="max-width:650px;margin:30px auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;">

            <div style="background:#10264a;padding:28px 32px;">
              <h1 style="margin:0;color:#ffffff;">
                Journey Genie
              </h1>
              <p style="margin:8px 0 0;color:#d9a441;font-weight:bold;">
                TRAVEL SMART. TRAVEL SIMPLE.
              </p>
            </div>

            <div style="padding:32px;">

              <h2>Hello ${escapeHtml(fullName)},</h2>

              <p>
                Thank you for registering your travel agency with Journey Genie.
              </p>

              <p>
                Please verify your email address by clicking the button below.
              </p>

              <div style="margin:30px 0;">
                <a
                  href="${confirmUrl}"
                  style="display:inline-block;background:#d9a441;color:#10264a;text-decoration:none;padding:14px 24px;border-radius:8px;font-weight:bold;"
                >
                  Verify My Journey Genie Account
                </a>
              </div>

              <p>
                After email verification, your agency application will remain
                pending until it is reviewed by the Journey Genie administrator.
              </p>

              <p style="color:#6b7280;font-size:13px;margin-top:30px;">
                If you did not create this account, you can ignore this email.
              </p>

            </div>
          </div>
        </body>
      </html>
    `,
  });

  if (!mailed.ok) {
    console.error(
      "Journey Genie verification email error:",
      mailed.error
    );

    return NextResponse.json(
      {
        error:
          mailed.error ||
          "Your account was created, but the verification email could not be sent. Please contact Journey Genie support.",
      },
      { status: 502 }
    );
  }

  /*
   * ---------------------------------------------------------
   * 11. SEND COMPLETE CUSTOMER DETAILS TO ADMIN
   * ---------------------------------------------------------
   *
   * SECURITY:
   * Password is intentionally NOT included.
   */

  const adminMail = await sendEmail({
    to: adminEmail,
    from: getAuthFromEmail(),
    replyTo: email,
    subject: `New Journey Genie agent signup — ${companyName}`,
    html: adminSignupEmailHtml({
      companyName,
      fullName,
      email,
      phone,
      city,
      address,
    }),
  });

  /*
   * Admin email failure should be logged.
   * The customer account itself is still valid.
   */

  if (!adminMail.ok) {
    console.error(
      "Journey Genie admin notification error:",
      adminMail.error
    );
  }

  /*
   * ---------------------------------------------------------
   * 12. SUCCESS
   * ---------------------------------------------------------
   */

  return NextResponse.json({
    ok: true,
    message:
      "Your Journey Genie agent application has been submitted. Please check your email to verify your account. Your booking access will activate after administrator approval.",
  });
}
