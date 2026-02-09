import type { NextApiRequest, NextApiResponse } from "next";

type Data = { output?: string; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { target, goal } = req.body;

  const systemPrompt = `
Sen profesyonel bir prompt mühendisisin.
Hedef platform: ${target}
Amaç: ${goal}
`;

  return res.status(200).json({ output: systemPrompt });
}
