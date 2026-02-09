import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { idea } = req.body;

  const gameCode = `// Basit HTML5 oyun iskeleti
// Oyun fikri: ${idea}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(50, 50, 50, 50);
  requestAnimationFrame(loop);
}

loop();
`;

  res.status(200).json({ output: gameCode });
}
