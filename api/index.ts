import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.json({
      name: "Ester Benjumea",
      title: "Psicóloga General Sanitaria",
      phone: "+34 663 62 89 17",
      whatsapp: "https://wa.me/34663628917",
      instagram: "https://www.instagram.com/yosoypsico_/",
      email: "contacto@esterbenjumea.com",
    });
  }

  if (req.method === "POST") {
    const { nombre, email, mensaje } = req.body;
    console.log("Nuevo mensaje de contacto:", { nombre, email, mensaje });
    return res.json({ ok: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
