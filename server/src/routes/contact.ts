import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    name: "Ester Benjumea",
    title: "Psicóloga General Sanitaria",
    phone: "+34 000 000 000",
    whatsapp: "https://wa.me/34000000000",
    instagram: "https://instagram.com/yosoypsico_",
    email: "contacto@esterbenjumea.com",
    address: "Calle Ejemplo, 000 - Consulta 00, Ciudad",
  });
});

router.post("/", (req, res) => {
  const { nombre, email, mensaje } = req.body;
  console.log("Nuevo mensaje de contacto:", { nombre, email, mensaje });
  res.json({ ok: true });
});

export default router;
