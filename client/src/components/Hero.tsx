import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={styles.name}>Ester Benjumea</h1>
          <p className={styles.title}>Psicóloga General Sanitaria</p>
          <p className={styles.description}>
            Un espacio seguro donde aprender a escucharte y tratarte con la
            amabilidad que mereces.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Reserva tu cita en Doctoralia
          </a>
        </div>
        <div className={styles.image}>
          <div className={styles.imagePlaceholder}>
            <span>Foto de Ester</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
