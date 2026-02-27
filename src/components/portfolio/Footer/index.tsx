import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>

      <button
        className={styles.arrowButton}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          className={styles.arrowIcon}
          viewBox="0 0 40 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="89"
            rx="19.5"
            className={styles.arrowBorder}
          />
          <path
            d="M19 70C19 70.5523 19.4477 71 20 71C20.5523 71 21 70.5523 21 70H19ZM20 20L14.2265 30H25.7735L20 20ZM21 70L21 29H19L19 70H21Z"
            className={styles.arrowPath}
          />
        </svg>
      </button>

      <div className={styles.content}>
        <p>© {new Date().getFullYear()}</p>
        <p>Behrouz Rajaei</p>
      </div>

    </footer>
  );
}
