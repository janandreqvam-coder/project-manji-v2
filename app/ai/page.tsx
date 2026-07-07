"use client";

import { useState } from "react";
import AppLayout from "../components/ui/AppLayout";
import PageHero from "../components/ui/PageHero";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "👋 Welcome! Ask me anything about Project Manji, drifting, tuning, Japanese cars or Assetto Corsa.",
    },
  ]);

  async function askAI(customMessage?: string) {
    const userMessage = customMessage ?? message;

    if (!userMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  }

  const suggestions = [
    "🚗 Recommend me a drift car",
    "🏁 Help tune my S15",
    "📅 When is the next event?",
    "👤 Show Rullo's profile",
    "⚙️ Explain camber & toe",
    "🌃 Best Shutoko build",
  ];

  return (
    <AppLayout>
      <PageHero
        eyebrow="Project Manji"
        title="Manji AI"
        description="Your intelligent garage assistant for everything Project Manji."
      />

          <div className="mt-20 rounded-3xl border border-red-600/20 bg-zinc-900/80 backdrop-blur-sm">

            {/* Header */}

            <div className="flex items-center border-b border-red-600/20 p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-3xl">
                  🤖
                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    Manji AI
                  </h2>

                  <p className="text-green-400">
                    ● Online
                  </p>

                </div>

              </div>

            </div>

            <div className="space-y-6 p-8">

              {/* Suggestions */}

              <div className="grid gap-4 md:grid-cols-2">

                {suggestions.map((item) => (
                  <button
                    key={item}
                    onClick={() => askAI(item)}
                    className="rounded-xl border border-red-600/20 bg-black/40 p-5 text-left transition hover:border-red-500 hover:bg-red-600/10"
                  >
                    {item}
                  </button>
                ))}

              </div>

              {/* Chat */}

              <div className="space-y-5">

                {messages.map((msg, index) => (

                  <div
                    key={index}
                    className={`rounded-2xl p-6 ${
                      msg.role === "user"
                        ? "border border-red-600/30 bg-red-600/10"
                        : "border border-red-600/20 bg-black/40"
                    }`}
                  >

                    <p className="mb-3 font-bold text-red-500">
                      {msg.role === "user"
                        ? "👤 You"
                        : "🤖 Manji AI"}
                    </p>

                    <p className="whitespace-pre-wrap leading-8 text-gray-300">
                      {msg.content}
                    </p>

                  </div>

                ))}

                {loading && (

                  <div className="rounded-2xl border border-red-600/20 bg-black/40 p-6">

                    <p className="font-bold text-red-500">
                      🤖 Manji AI
                    </p>

                    <p className="mt-4 animate-pulse text-gray-400">
                      Thinking...
                    </p>

                  </div>

                )}

              </div>

              {/* Input */}

              <div className="mt-10 flex gap-4">

                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      askAI();
                    }
                  }}
                  placeholder="Ask Manji AI anything..."
                  className="flex-1 rounded-xl border border-red-600/20 bg-black/40 px-6 py-4 outline-none focus:border-red-500"
                />

                <button
                  onClick={() => askAI()}
                  disabled={loading}
                  className="rounded-xl bg-red-600 px-8 font-bold transition hover:bg-red-500 disabled:opacity-50"
                >
                  {loading ? "Thinking..." : "Send"}
                </button>

              </div>

            </div>

          </div>

    </AppLayout>
  );
}
