import "./globals.css";

export const metadata = {
  title: "AI Studio",
  description: "Çoklu yapay zeka üretim platformu"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
