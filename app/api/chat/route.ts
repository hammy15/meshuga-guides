import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const SYSTEM_PROMPT = `You are a friendly, concise support assistant for Meshuga tech guides. 
You help people with:
- Questions about our guides (Cursor AI, Claude vs ChatGPT, Wispr Flow, Perplexity AI, etc.)
- Tech setup issues related to the tools our guides cover
- Recommendations on which guide is right for them
- General tech questions in plain English

Rules:
- Keep answers short (2-3 sentences max unless they need detail)
- Use plain English, no jargon
- Be warm and helpful
- If you don't know something, say so honestly
- Mention relevant Meshuga guides when appropriate
- Never make up features or pricing — our guides are one-time purchases ranging $19-$29
- Premium subscription is $2.99/month for full library access`;

export async function POST(req: NextRequest) {
  if (!OPENAI_API_KEY) {
    return NextResponse.json({ message: "Chat support is being set up. Check back soon!" });
  }

  try {
    const { messages, context } = await req.json();

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: `${SYSTEM_PROMPT}\n\nCurrent site context: ${context}` },
          ...messages.slice(-10), // Last 10 messages for context
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    const message = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that. Try again.";

    return NextResponse.json({ message });
  } catch {
    return NextResponse.json({ message: "Something went wrong. Please try again." });
  }
}
