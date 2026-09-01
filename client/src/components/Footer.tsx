import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <p className={styles.name}>Ester Benjumea</p>
          <p className={styles.title}>Psicóloga General Sanitaria</p>
          <p className={styles.phone}>+34 663 62 89 17</p>
        </div>

        <div className={styles.center}>
          <p className={styles.contactLabel}>Contacto</p>
          <a
            href="https://paa.ge/yosoypsico/es?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafePaOKAF0JXB0FQdez0BsR5H_hEWgWYg_GLEtXEfBdLkBQj0ACC5a_g4pY6Q_aem_CyJdaYWxESEx1sIp51PNbA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enlaces"
            className={styles.contactLink}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/yosoypsico_/"
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
            <a
              href="https://www.linkedin.com/in/yosoypsico/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
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
