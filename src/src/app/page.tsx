import Link from "next/link";

const modules = [
  { slug: "code", title: "Kod Üretici", desc: "İstediğin dilde kod yazdır." },
  { slug: "prompt", title: "Prompt Üretici", desc: "LLM ve görsel modeller için güçlü prompt’lar." },
  { slug: "website", title: "Web Sitesi Üretici", desc: "Prompt’tan landing page oluştur." },
  { slug: "game", title: "Oyun Üretici", desc: "Basit 2D oyun iskeletleri üret." },
  { slug: "media", title: "Görsel / Video Üretici", desc: "Metinden görsel ve kısa video." }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center py-16">
      <h1 className="text-3xl font-bold mb-4">AI Studio</h1>
      <p className="mb-10 text-slate-300">
        Tek platformda oyun, kod, site, prompt ve medya üret.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {modules.map((m) => (
          <Link
            key={m.slug}
            href={`/studio/${m.slug}`}
            className="border border-slate-700 rounded-xl p-5 hover:border-indigo-500 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{m.title}</h2>
            <p className="text-sm text-slate-300">{m.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
