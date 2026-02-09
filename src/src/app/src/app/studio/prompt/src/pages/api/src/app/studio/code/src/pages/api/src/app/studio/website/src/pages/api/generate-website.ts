import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;

  const html = `
  <html>
  <body style="font-family: Arial; padding: 40px;">
    <h1>${prompt}</h1>
    <p>Bu metne göre oluşturulmuş basit bir web sayfasıdır.</p>
  </body>
  </html>
  `;

  res.status(200).json({ output: html });
}
