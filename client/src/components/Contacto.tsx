import { useState, useEffect } from "react";
import styles from "./Contacto.module.css";

const instagramPosts = [
  "https://www.instagram.com/p/DE1-Nm7o3rI/",
  "https://www.instagram.com/p/DCB3JtnIE1g/",
];

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ nombre: "", email: "", mensaje: "" });
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
              <button type="submit" className={styles.submitBtn}>
                Enviar mensaje
              </button>
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
              {instagramPosts.map((url) => (
                <blockquote
                  key={url}
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "0",
                    padding: 0,
                    width: "100%",
                  }}
                >
                  <div style={{ padding: "16px" }}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#FFFFFF",
                        lineHeight: 0,
                        padding: "0 0",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "40px", width: "40px" }}></div>
                        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, marginLeft: "8px" }}>
                          <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "10px", marginBottom: "6px", width: "100px" }}></div>
                          <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "10px", width: "60px" }}></div>
                        </div>
                      </div>
                      <div style={{ padding: "16px 0" }}>
                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "200px", width: "100%" }}></div>
                      </div>
                    </a>
                  </div>
                </blockquote>
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
