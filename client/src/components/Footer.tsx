import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <p className={styles.name}>Ester Benjumea</p>
          <p className={styles.title}>Psicóloga General Sanitaria</p>
          <p className={styles.phone}>Cel. nº: [Tu Número]</p>
        </div>

        <div className={styles.center}>
          <p className={styles.contactLabel}>Contacto</p>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            <a
              href="https://instagram.com/psicologa.ester"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 11v5M8 8v.01M12 16v-5c0-1 1-2 2-2s2 1 2 2v5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
          <p className={styles.handle}>@yosoypsico_</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
