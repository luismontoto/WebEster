import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={styles.name}>Ester Benjumea - Psicóloga General Sanitaria en Sevilla</h1>
          <p className={styles.title}>Especialista en ansiedad, estrés y terapia online</p>
          <p className={styles.description}>
            Psicóloga General Sanitaria en Sevilla. Un espacio seguro donde aprender a escucharte y tratarte con la amabilidad que mereces. Terapia presencial y online.
          </p>
          <a
            href="https://www.doctoralia.es/ester-benjumea/psicologo/sevilla?utm_campaign=195470&utm_medium=link&utm_source=widget&utm_term=instagram-profile-link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Reserva tu cita en Doctoralia
          </a>
        </div>
        <div className={styles.image}>
          <img 
            src="/FotoPrincipal.png" 
            alt="Ester Benjumea - Psicóloga General Sanitaria en Sevilla" 
            width={600}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
