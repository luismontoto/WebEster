import styles from "./Servicios.module.css";

const services = [
  {
    icon: "🧠",
    title: "Terapia Individual en Sevilla",
    description:
      "Terapia psicológica adaptada a tus necesidades. Un espacio seguro para explorar tus emociones y pensamientos con ayuda profesional.",
  },
  {
    icon: "💑",
    title: "Terapia de Pareja",
    description:
      "Trabaja junto a tu pareja para mejorar la comunicación y fortalecer el vínculo. Terapia de pareja presencial y online.",
  },
  {
    icon: "☁️",
    title: "Terapia Online",
    description:
      "Sesiones de psicología a distancia con la misma calidad y cercanía que la terapia presencial. Desde donde estés.",
  },
  {
    icon: "",
    title: "Crecimiento Personal",
    description:
      "Descubre tus recursos internos y desarrolla herramientas para una vida más plena. Proceso de autoconocimiento guiado.",
  },
];

function Servicios() {
  return (
    <section id="servicios" className={`section ${styles.servicios}`}>
      <div className="container">
        <h2 className={`${styles.title} section-title`}>Servicios de Psicología en Sevilla</h2>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
