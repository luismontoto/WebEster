import { useState } from "react";
import styles from "./Contacto.module.css";

const instagramPosts = [
  {
    url: "https://www.instagram.com/p/DE1-Nm7o3rI/",
    title: "Consejos para gestionar la ansiedad",
    excerpt: "Técnicas sencillas que puedes aplicar en tu día a día para reducir la ansiedad.",
  },
  {
    url: "https://www.instagram.com/p/DCB3JtnIE1g/",
    title: "La importancia de pedir ayuda",
    excerpt: "Ir al psicólogo no es de débiles, es de valientes. Dar el primer paso es lo más importante.",
  },
];

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nombre: "", email: "", mensaje: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contacto" className={`section ${styles.contacto}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className="section-title">Contacta con tu Psicóloga en Sevilla</h2>
            <p className={styles.contactIntro}>
              ¿Necesitas ayuda? Ponte en contacto conmigo para reservar tu cita de psicología en Sevilla. Ofrezco terapia presencial y online.
            </p>
            <a
              href="https://www.doctoralia.es/ester-benjumea/psicologo/sevilla?utm_campaign=195470&utm_medium=link&utm_source=widget&utm_term=instagram-profile-link"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              Reservar cita en Doctoralia
            </a>
            <p className={styles.dividerText}>o escríbeme directamente</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                required
              />
              <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status === "success" && (
                <p className={styles.feedbackSuccess}>Mensaje enviado. Te responderé pronto.</p>
              )}
              {status === "error" && (
                <p className={styles.feedbackError}>Ha ocurrido un error. Inténtalo de nuevo o escríbeme por WhatsApp.</p>
              )}
            </form>
            <a
              href="https://wa.me/34663628917"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className={styles.right}>
            <h3 className={styles.igTitle}>
              Últimos consejos de @yosoypsico_
            </h3>
            <div className={styles.igGrid}>
              {instagramPosts.map((post) => (
                <a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.igCard}
                >
                  <div className={styles.igCardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="5"/>
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                    </svg>
                  </div>
                  <h4 className={styles.igCardTitle}>{post.title}</h4>
                  <p className={styles.igCardExcerpt}>{post.excerpt}</p>
                  <span className={styles.igCardLink}>Ver en Instagram →</span>
                </a>
              ))}
            </div>
            <a
              href="https://www.instagram.com/yosoypsico_/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igLink}
            >
              Ver más en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
