"use client";

import { useState } from "react";

export default function MediaStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [url, setUrl] = useState("");

  const generate = async () => {
    const res = await fetch("/api/generate-media", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setUrl(data.output);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Görsel / Video Üretici</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        className="w-full bg-slate-900 border border-slate-700 p-2 rounded mb-4"
        placeholder="Örn: Uzayda yürüyen bir astronot..."
      />
      <button
        onClick={generate}
        
