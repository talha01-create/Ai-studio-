"use client";

import { useState } from "react";

export default function CodeStudioPage() {
  const [language, setLanguage] = useState("javascript");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");
    const res = await fetch("/api/generate-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, description })
    });
    const data = await res.json();
    setResult(data.output || "Bir hata oluştu.");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Kod Üretici</h1>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-slate-900 border border-slate-700 p-2 rounded mb-4"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="csharp">C#</option>
        <option value="java">Java</option>
      </select>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        className="w-full bg-slate-900 border border-slate-700 p-2 rounded mb-4"
        placeholder="Örn: Kullanıcı giriş sistemi yaz..."
      />
      <button
        onClick={handleGenerate}
        disabled={loading || !description}
        className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500"
      >
        {loading ? "Üretiliyor..." : "Kod Üret"}
      </button>
      {result && (
        <pre className="bg-slate-900 border border-slate-700 p-4 rounded mt-4 whitespace-pre-wrap">
          {result}
        </pre>
      )}
    </main>
  );
}
