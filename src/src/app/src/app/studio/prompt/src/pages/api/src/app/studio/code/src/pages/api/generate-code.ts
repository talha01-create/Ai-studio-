import type { NextApiRequest, NextApiResponse } from "next";

type Data = { output?: string; error?: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { language, description } = req.body;

  const code = `// ${language} kodu
// Açıklama: ${description}

function example() {
  console.log("Bu bir örnek koddur.");
}
`;

  return res.status(200).json({ output: code });
}
