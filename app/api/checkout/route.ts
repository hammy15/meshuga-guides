import { NextRequest, NextResponse } from "next/server";

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;

export async function POST(req: NextRequest) {
  if (!STRIPE_KEY) {
    return NextResponse.json({ error: "Payments not configured" }, { status: 503 });
  }

  try {
    const { priceId, mode } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    const params = new URLSearchParams();
    params.append("mode", mode === "subscription" ? "subscription" : "payment");
    params.append("line_items[0][price]", priceId);
    params.append("line_items[0][quantity]", "1");
    params.append("success_url", `${req.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`);
    params.append("cancel_url", `${req.nextUrl.origin}`);

    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRIPE_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await res.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ url: data.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
