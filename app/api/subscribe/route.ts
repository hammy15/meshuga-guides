import { NextRequest, NextResponse } from "next/server";

// Simple email capture — stores to a JSON file for now
// TODO: Wire to MailerLite or Supabase
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN || "unknown";
    const entry = { email, domain, timestamp: new Date().toISOString() };

    // Log to console (Vercel logs capture this)
    console.log("📧 New subscriber:", JSON.stringify(entry));

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
