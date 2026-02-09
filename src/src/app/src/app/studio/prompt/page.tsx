"use client";

import { useState } from "react";

export default function PromptStudioPage() {
  const [target, setTarget] = useState("chatgpt");
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");
    const res = await fetch("/api/generate-prompt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target, goal })
    });
    const data = await res.json();
    setResult(data.output || "Bir şeyler ters gitti.");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center py-10">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Prompt Üretici</h1>
        <textarea
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          rows={4}
          className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2"
          placeholder="Örn: SaaS ürünü için ikna edici landing page metni..."
        />
        <button
          onClick={handleGenerate}
          disabled={loading || !goal}
          className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 mt-4"
        >
          {loading ? "Üretiliyor..." : "Prompt Üret"}
        </button>
        {result && (
          <pre className="bg-slate-900 border border-slate-700 rounded p-4 mt-6 whitespace-pre-wrap text-sm">
            {result}
          </pre>
        )}
      </div>
    </main>
  );
}
