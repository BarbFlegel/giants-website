import { NextResponse } from "next/server";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "GIANTS Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
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
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `GIANTS website: ${requestType} — ${name}`, html }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return NextResponse.json({ error: "Email could not be sent" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
