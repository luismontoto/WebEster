import styles from "./Opiniones.module.css";

const opiniones = [
  {
    icon: "🧠",
    title: "Terapia Individual Emocional",
    text: "Como iba a un sitio de orden... Lucía R.",
  },
  {
    icon: "💡",
    title: "Autoestima y Autocuidado",
    text: "Pensamos juntas en accidentes... Fernando.",
  },
  {
    icon: "☁️",
    title: "Autoestima Terapia Online",
    text: "Sentirse escuchada y validada... Lucía R.",
  },
];

function Opiniones() {
  return (
    <section id="opiniones" className={`section ${styles.opiniones}`}>
      <div className="container">
        <h2 className={`${styles.title} section-title`}>Opiniones</h2>
        <div className={styles.grid}>
          {opiniones.map((o) => (
            <div key={o.title} className={styles.card}>
              <div className={styles.icon}>{o.icon}</div>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.ctaWrap}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Ver opiniones en Doctoralia
          </a>
        </div>
      </div>
    </section>
  );
}

export default Opiniones;
