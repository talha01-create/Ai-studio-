"use client";

import { useState } from "react";

export default function GameStudioPage() {
  const [idea, setIdea] = useState("");
  const [code, setCode] = useState("");

  const generate = async () => {
    const res = await fetch("/api/generate-game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea })
    });
    const data = await res.json();
    setCode(data.output);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Oyun Üretici</h1>
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        rows={4}
        className="w-full bg-slate-900 border border-slate-700 p-2 rounded mb-4"
        placeholder="Örn: Mario tarzı bir platform oyunu..."
      />
      <button
        onClick={generate}
        className="bg-indigo-600 px-4 py-2 rounded"
      >
        Oyun Kodu Üret
      </button>
      {code && (
        <pre className="bg-slate-900 border border-slate-700 p-4 rounded mt-4 whitespace-pre-wrap">
          {code}
        </pre>
      )}
    </main>
  );
}
