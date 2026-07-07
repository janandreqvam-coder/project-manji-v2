"use client";

import { useState } from "react";

export default function ChatWindow() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(text?: string) {
    const prompt = text ?? message;

    if (!prompt.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
        }),
      });

      const data = await res.json();

      setReply(data.reply);
    } catch (err) {
      console.error(err);
      setReply("Something went wrong.");
    }

    setLoading(false);
    setMessage("");
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
    <div className="rounded-3xl border border-red-600/20 bg-zinc-900/80 backdrop-blur-sm">

      {/* Header */}
      <div className="flex items-center gap-4 border-b border-red-600/20 p-6">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-3xl">
          🤖
        </div>

        <div>
          <h2 className="text-2xl font-bold">Manji AI</h2>
          <p className="text-green-400">● Online</p>
        </div>

      </div>

      {/* Body */}
      <div className="space-y-6 p-8">

        <div className="rounded-2xl bg-black/40 p-6">
          <p className="text-lg">👋 Welcome!</p>

          <p className="mt-2 text-gray-400">
            Ask me anything about Project Manji, drifting, tuning,
            Japanese cars or Assetto Corsa.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => sendMessage(item)}
              className="rounded-xl border border-red-600/20 bg-black/40 p-4 text-left transition hover:border-red-500 hover:bg-red-600/10"
            >
              {item}
            </button>
          ))}
        </div>

        {reply && (
          <div className="rounded-2xl border border-red-600/20 bg-black/40 p-6">
            <p className="font-bold text-red-500">🤖 Manji AI</p>

            <p className="mt-4 whitespace-pre-wrap text-gray-300">
              {reply}
            </p>
          </div>
        )}

        <div className="flex gap-4">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Ask Manji AI..."
            className="flex-1 rounded-xl border border-red-600/20 bg-black/40 px-6 py-4 outline-none focus:border-red-500"
          />

          <button
            onClick={() => sendMessage()}
            disabled={loading}
            className="rounded-xl bg-red-600 px-8 font-bold transition hover:bg-red-500 disabled:opacity-50"
          >
            {loading ? "..." : "Send"}
          </button>

        </div>

      </div>

    </div>
  );
}   