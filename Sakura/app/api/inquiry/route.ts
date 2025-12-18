import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });

  // TODO: send email (Resend/Nodemailer) or push to CRM.
  console.log("[inquiry]", body);

  return NextResponse.json({ ok: true });
}
