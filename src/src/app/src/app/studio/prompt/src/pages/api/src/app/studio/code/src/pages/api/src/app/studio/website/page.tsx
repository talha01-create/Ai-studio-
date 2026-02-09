"use client";

import { useState } from "react";

export default function WebsiteStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const res = await fetch("/api/generate-website", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setHtml(data.output || "");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Web Sitesi Üretici</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        className="w-full bg-slate-900 border border-slate-700 p-2 rounded mb-4"
        placeholder="Örn: Modern bir landing page oluştur..."
      />
      <button
        onClick={generate}
        disabled={loading || !prompt}
        className="bg-indigo-600 px-4 py-2 rounded"
      >
        {loading ? "Üretiliyor..." : "Site Üret"}
      </button>
      {html && (
        <iframe
          className="w-full h-96 bg-white mt-6 rounded"
          srcDoc={html}
        />
      )}
    </main>
  );
}
