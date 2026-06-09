import styles from "./Servicios.module.css";

const services = [
  {
    icon: "🧠",
    title: "Terapia Individual",
    description:
      "Terapia adaptada a tus necesidades. Un espacio seguro para explorar tus emociones y pensamientos.",
  },
  {
    icon: "💑",
    title: "Terapia de Pareja",
    description:
      "Trabaja junto a tu pareja para mejorar la comunicación y fortalecer el vínculo.",
  },
  {
    icon: "☁️",
    title: "Terapia Online",
    description:
      "Sesiones a distancia con la misma calidad y cercanía que la terapia presencial.",
  },
  {
    icon: "",
    title: "Crecimiento Personal",
    description:
      "Descubre tus recursos internos y desarrolla herramientas para una vida más plena.",
  },
];

function Servicios() {
  return (
    <section id="servicios" className={`section ${styles.servicios}`}>
      <div className="container">
        <h2 className={`${styles.title} section-title`}>Servicios</h2>
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
