import styles from "./Opiniones.module.css";

const opiniones = [
  {
    nombre: "Miguel",
    fecha: "30 de julio de 2026",
    texto: "Me ha venido muy bien la terapia. Os lo recomiendo, porque con la persona que se llama Esther; es muy cercana y te tranquiliza. Puede que a primera vista, acojone un poco por su seriedad. Luego te va agradando más y más cada vez que te vas acomodando en la silla. Fuera de bromas... Es una profesional. Muchísimas gracias Esther.",
  },
  {
    nombre: "Francisco Manuel Álvarez",
    fecha: "30 de junio de 2026",
    texto: "Esther ha sido la mejor decisión que tomé aquella noche cuando miré por internet y por cercanía era lo que mejor me venía, y desde la primera cita que salí de consulta, supe que es de la mejor decisión que he tomado. Ha sabido con sus herramientas saber todo lo que me pasaba, me ha sacado más de lo que tenía y sobre todo ha hecho de mí un cambio brutal y que lo veo y lo noto día a día.",
  },
  {
    nombre: "Noelia",
    fecha: "26 de junio de 2026",
    texto: "Excelente psicóloga. Desde el primer momento supo identificar el origen de lo que me estaba ocurriendo y cómo abordarlo. Me he sentido muy acompañada durante todo el proceso y he mejorado mucho gracias a su profesionalidad y cercanía. La recomiendo sin ninguna duda.",
  },
  {
    nombre: "Elena R.",
    fecha: "24 de febrero de 2026",
    texto: "Estoy muy agradecida por el acompañamiento que estoy recibiendo por parte de Ester. Es una excelente profesional, muy preparada y profundamente empática. Desde el primer día me he sentido escuchada, comprendida y en un espacio seguro donde puedo expresarme con total confianza. Destaco especialmente su calidad humana y su capacidad para hacer que cada sesión sea un lugar de calma y crecimiento.",
  },
  {
    nombre: "N.C",
    fecha: "21 de febrero de 2026",
    texto: "Salí de la consulta sintiéndome mucho más ligera. Me sentí acogida desde el primer momento, con una escucha real y una empatía que se nota. Me ayudó a ver las cosas desde otra perspectiva y a entenderme mejor. Ha sido una experiencia muy positiva y estoy súper agradecida.",
  },
  {
    nombre: "P.D.C",
    fecha: "20 de febrero de 2026",
    texto: "Ha sido una experiencia muy positiva. Desde el primer momento me sentí en un espacio seguro, sin juicios y con mucha comprensión. Su acompañamiento ha sido clave en mi crecimiento personal y en momentos difíciles. Ester es una profesional comprometida y humana. La recomiendo con total confianza.",
  },
];

function Opiniones() {
  return (
    <section id="opiniones" className={`section ${styles.opiniones}`}>
      <div className="container">
        <h2 className={`${styles.title} section-title`}>Opiniones de Pacientes</h2>
        <p className={styles.subtitle}>49 opiniones reales de pacientes · Valoración 5/5 en Doctoralia</p>
        <div className={styles.grid}>
          {opiniones.map((o) => (
            <div key={o.nombre} className={styles.card}>
              <div className={styles.header}>
                <span className={styles.nombre}>{o.nombre}</span>
                <span className={styles.fecha}>{o.fecha}</span>
              </div>
              <p className={styles.texto}>{o.texto}</p>
            </div>
          ))}
        </div>
        <div className={styles.ctaWrap}>
          <a
            href="https://www.doctoralia.es/ester-benjumea/psicologo/sevilla#profile-reviews"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Ver todas las opiniones en Doctoralia
          </a>
        </div>
      </div>
    </section>
  );
}

export default Opiniones;
