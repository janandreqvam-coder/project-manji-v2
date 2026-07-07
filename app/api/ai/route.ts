import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { default: OpenAI } = await import("openai");
    const { message } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          reply: "Manji AI is not configured yet.",
        },
        { status: 500 }
      );
    }

    const openai = new OpenAI({ apiKey });

    const response = await openai.responses.create({
      model: "gpt-5.4-mini",
      input: [
        {
          role: "system",
          content: `
You are Manji AI.

You are the official assistant for the Project Manji community.

Be friendly, enthusiastic, and knowledgeable about:
- Drifting
- Touge
- Shutoko
- Circuit Racing
- Japanese cars
- Assetto Corsa
- Car tuning

Keep answers concise unless the user asks for more detail.
`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
