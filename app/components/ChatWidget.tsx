"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatWidgetProps {
  accentColor: string;
  siteName: string;
  guideContext?: string;
}

export default function ChatWidget({ accentColor, siteName, guideContext }: ChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          context: guideContext || siteName,
        }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.message || "Sorry, something went wrong." }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, I couldn't connect. Try again." }]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white shadow-lg transition hover:scale-105 flex items-center justify-center"
        style={{ background: accentColor }}
        aria-label="Open chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-[360px] max-h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4" style={{ background: accentColor }}>
        <div>
          <p className="text-white font-semibold text-sm">{siteName} Support</p>
          <p className="text-white/70 text-xs">Ask anything about our guides</p>
        </div>
        <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition" aria-label="Close chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 min-h-[250px] max-h-[350px]">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <p className="text-sm font-medium mb-1">How can I help?</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Ask about guides, setup help, or recommendations
            </p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className="max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed"
              style={
                msg.role === "user"
                  ? { background: accentColor, color: "white" }
                  : { background: "var(--bg-card)", border: "1px solid var(--border)" }
              }
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div
              className="rounded-xl px-4 py-2.5 text-sm"
              style={{ background: "var(--bg-card)", color: "var(--text-muted)" }}
            >
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3" style={{ borderTop: "1px solid var(--border)" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a question..."
            className="flex-1 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2"
            style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text)" }}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
            style={{ background: accentColor }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
