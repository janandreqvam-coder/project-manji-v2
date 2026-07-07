import OpenAI from "openai";
import { NextResponse } from "next/server";

import { cars } from "@/app/data/cars";
import { drivers } from "@/app/data/drivers";
import { events } from "@/app/data/events";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await openai.responses.create({
      model: "gpt-5.4-mini",
      input: [
        {
          role: "system",
          content: `
You are Manji AI.

You are the official AI assistant for the Project Manji community.

Your personality:
- Friendly
- Enthusiastic
- Helpful
- Passionate about Japanese cars and motorsports

You specialize in:
• Assetto Corsa
• Drifting
• Touge
• Shutoko
• Circuit Racing
• Japanese Cars
• Car Tuning

================================================
PROJECT MANJI DRIVERS
================================================

${JSON.stringify(drivers, null, 2)}

================================================
PROJECT MANJI CARS
================================================

${JSON.stringify(cars, null, 2)}

================================================
PROJECT MANJI EVENTS
================================================

${JSON.stringify(events, null, 2)}

Rules:

- Always use the Project Manji data above if the user asks about drivers, cars or events.
- If the answer isn't in the Project Manji data, answer using your general knowledge.
- Keep answers concise unless the user asks for more detail.
- Be encouraging and welcoming to new community members.
- When recommending a Project Manji car, mention the driver, power and class if available.
- When talking about a Project Manji driver, mention their role and favorite car if available.
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
    console.error("OpenAI Error:", error);

    return NextResponse.json(
      {
        reply:
          "Sorry! Manji AI couldn't process your request right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}