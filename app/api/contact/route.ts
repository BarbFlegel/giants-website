import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipients = (process.env.CONTACT_TO_EMAIL ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || recipients.length === 0 || !from) {
    console.error("Contact email configuration is incomplete", {
      hasApiKey: Boolean(apiKey),
      hasRecipient: recipients.length > 0,
      hasSender: Boolean(from),
    });
    return NextResponse.json(
      { error: "Email service is not configured", code: "EMAIL_NOT_CONFIGURED" },
      { status: 503 }
    );
  }

  const data = await request.formData();
  if (String(data.get("website") ?? "")) return NextResponse.json({ ok: true });

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const requestType = String(data.get("requestType") ?? "General request").trim();

  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const fields = [
    ["Request", requestType], ["Name", name], ["Email", email], ["Message", message],
    ["Preferred date", String(data.get("preferredDate") ?? "")],
    ["Location", String(data.get("location") ?? "")],
    ["Group size / age", String(data.get("groupSize") ?? "")],
    ["Language", String(data.get("locale") ?? "en")],
  ].filter(([, value]) => value.trim());

  const html = fields.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replaceAll("\n", "<br>")}</p>`).join("");
  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: recipients,
        reply_to: email,
        subject: `GIANTS website: ${requestType} — ${name}`,
        html,
        text: fields.map(([label, value]) => `${label}:\n${value}`).join("\n\n"),
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Resend request failed", error);
    return NextResponse.json(
      { error: "Email provider is unavailable", code: "EMAIL_PROVIDER_UNAVAILABLE" },
      { status: 502 }
    );
  }

  if (!response.ok) {
    console.error("Resend rejected the email", response.status, await response.text());
    return NextResponse.json(
      { error: "Email provider rejected the message", code: "EMAIL_REJECTED" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
