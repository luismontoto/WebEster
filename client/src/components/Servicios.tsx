import styles from "./Servicios.module.css";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4 7l-3 3-3-3c-2-1.5-4-4-4-7a7 7 0 0 1 7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    title: "Terapia Individual en Sevilla",
    description:
      "Terapia psicológica adaptada a tus necesidades. Un espacio seguro para explorar tus emociones y pensamientos con ayuda profesional.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4c1.5 0 3 1 3 3s-1.5 3-3 3H8c-1.5 0-3-1-3-3s1.5-3 3-3"/>
        <path d="M8 10c-1.5 0-3 1-3 3s1.5 3 3 3h8c1.5 0 3-1 3-3s-1.5-3-3-3"/>
        <path d="M12 7v6"/>
      </svg>
    ),
    title: "Terapia de Pareja",
    description:
      "Trabaja junto a tu pareja para mejorar la comunicación y fortalecer el vínculo. Terapia de pareja presencial y online.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Terapia Online",
    description:
      "Sesiones de psicología a distancia con la misma calidad y cercanía que la terapia presencial. Desde donde estés.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c-4-3-8-6-8-11a8 8 0 0 1 16 0c0 5-4 8-8 11z"/>
        <path d="M12 11V7"/>
        <path d="M10 9h4"/>
        <path d="M9 14c1 1 2 2 3 2s2-1 3-2"/>
      </svg>
    ),
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
