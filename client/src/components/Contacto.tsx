import { useState } from "react";
import styles from "./Contacto.module.css";

const instagramPosts = [
  { id: 1, color: "#E8D5C4" },
  { id: 2, color: "#D4C5B5" },
  { id: 3, color: "#C9B99A" },
  { id: 4, color: "#BFAE8E" },
];

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

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
            <h2 className="section-title">Contacto</h2>
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
          </div>

          <div className={styles.right}>
            <h3 className={styles.igTitle}>
              Últimos consejos de @yosoypsico_
            </h3>
            <div className={styles.igGrid}>
              {instagramPosts.map((p) => (
                <a
                  key={p.id}
                  href="https://instagram.com/psicologa.ester"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.igPost}
                  style={{ background: p.color }}
                >
                  <span>Post {p.id}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
