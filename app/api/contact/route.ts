import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function emailLayout(content: string) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#F7F7F5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1A1A1A;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7F7F5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:#1A1A1A;padding:32px 40px;text-align:center;border-radius:16px 16px 0 0;">
              <h1 style="margin:0;font-size:28px;font-weight:400;letter-spacing:0.04em;color:#FFFFFF;">
                HIDEAWAY <span style="color:#C9A227;">HAIR STUDIO</span>
              </h1>
              <div style="width:60px;height:2px;background:linear-gradient(90deg,#be123c,#5b21b6,#047857);margin:16px auto 0;border-radius:2px;"></div>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background:#FFFFFF;padding:40px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#1A1A1A;padding:24px 40px;text-align:center;border-radius:0 0 16px 16px;">
              <p style="margin:0 0 4px;font-size:13px;color:#6B6B6B;">
                Hideaway Hair Studio &bull; San Antonio, TX
              </p>
              <p style="margin:0;font-size:13px;color:#6B6B6B;">
                <a href="mailto:info@hideawayhairstudio.com" style="color:#C9A227;text-decoration:none;">info@hideawayhairstudio.com</a>
                &bull;
                <a href="https://hideawayhairstudio.com" style="color:#C9A227;text-decoration:none;">hideawayhairstudio.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function notificationEmail(name: string, email: string, phone: string | undefined, message: string) {
  return emailLayout(`
    <h2 style="margin:0 0 24px;font-size:22px;font-weight:400;color:#1A1A1A;">New Contact Form Submission</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="padding:12px 16px;background:#F7F7F5;border-radius:8px;border-left:3px solid #C9A227;">
          <p style="margin:0 0 8px;font-size:14px;color:#6B6B6B;">Name</p>
          <p style="margin:0;font-size:16px;color:#1A1A1A;font-weight:600;">${name}</p>
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:12px 16px;background:#F7F7F5;border-radius:8px;border-left:3px solid #C9A227;">
          <p style="margin:0 0 8px;font-size:14px;color:#6B6B6B;">Email</p>
          <p style="margin:0;font-size:16px;color:#1A1A1A;">
            <a href="mailto:${email}" style="color:#5b21b6;text-decoration:none;">${email}</a>
          </p>
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:12px 16px;background:#F7F7F5;border-radius:8px;border-left:3px solid #C9A227;">
          <p style="margin:0 0 8px;font-size:14px;color:#6B6B6B;">Phone</p>
          <p style="margin:0;font-size:16px;color:#1A1A1A;">${phone || "Not provided"}</p>
        </td>
      </tr>
    </table>
    <div style="width:100%;height:1px;background:#E5E5E5;margin:0 0 24px;"></div>
    <h3 style="margin:0 0 12px;font-size:16px;font-weight:400;color:#6B6B6B;text-transform:uppercase;letter-spacing:0.05em;">Message</h3>
    <div style="padding:16px 20px;background:#F7F7F5;border-radius:8px;font-size:15px;line-height:1.6;color:#2D2D2D;">
      ${message.replace(/\n/g, "<br />")}
    </div>
  `);
}

function confirmationEmail(name: string) {
  return emailLayout(`
    <h2 style="margin:0 0 8px;font-size:24px;font-weight:400;color:#1A1A1A;">Thank you, ${name}!</h2>
    <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#6B6B6B;">
      We&rsquo;ve received your message and will get back to you as soon as possible.
    </p>
    <div style="width:100%;height:1px;background:#E5E5E5;margin:0 0 24px;"></div>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#2D2D2D;">
      In the meantime, feel free to check out our services or book an appointment online.
    </p>
    <div style="text-align:center;margin:32px 0;">
      <a href="https://hideawayhairstudio.com" style="display:inline-block;padding:14px 32px;background:#1A1A1A;color:#FFFFFF;font-size:14px;font-weight:600;text-decoration:none;border-radius:50px;letter-spacing:0.05em;text-transform:uppercase;">
        Visit Our Website
      </a>
    </div>
    <p style="margin:0;font-size:14px;line-height:1.6;color:#6B6B6B;text-align:center;">
      &mdash; The Hideaway Hair Studio Team
    </p>
  `);
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Send notification email to the business
    await resend.emails.send({
      from: "Hideaway Hair Studio <noreply@hideawayhairstudio.com>",
      to: "info@hideawayhairstudio.com",
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: notificationEmail(name, email, phone, message),
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "Hideaway Hair Studio <noreply@hideawayhairstudio.com>",
      to: email,
      subject: "We received your message!",
      html: confirmationEmail(name),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
