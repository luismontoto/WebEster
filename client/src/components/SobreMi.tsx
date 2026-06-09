import styles from "./SobreMi.module.css";

function SobreMi() {
  return (
    <section id="sobre-mi" className={`section ${styles.sobre}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.image}>
          <div className={styles.imagePlaceholder}>
            <span>Foto de Ester</span>
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Sobre mí</h2>
          <p className={styles.text}>
            Hola, soy Ester Benjumea. Te acompaño a construir una relación
            amable contigo misma.
          </p>
          <p className={styles.text}>
            A menudo, somos nuestros jueces más severos. Conmigo encontrarás un
            espacio seguro donde poder ser tú misma sin miedo al juicio. No
            tienes que poder con cada sola.
          </p>
          <p className={styles.text}>
            Mi enfoque es humanista e integrador, adaptándome a las necesidades
            de cada persona. Trabajo desde la empatía, el respeto y la
            colaboración.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
