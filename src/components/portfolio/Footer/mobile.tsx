import React from "react";
import mf_styles from "./footer.mobile.module.css";

export default function MobileFooter() {

  const mf_scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={mf_styles.mf_section}>

      {/* ARROW BUTTON */}
      <button
        className={mf_styles.mf_arrowButton}
        onClick={mf_scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          className={mf_styles.mf_arrowIcon}
          viewBox="0 0 40 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="89"
            rx="19.5"
            className={mf_styles.mf_arrowBorder}
          />
          <path
            d="M19 70C19 70.5523 19.4477 71 20 71C20.5523 71 21 70.5523 21 70H19ZM20 20L14.2265 30H25.7735L20 20ZM21 70L21 29H19L19 70H21Z"
            className={mf_styles.mf_arrowPath}
          />
        </svg>
      </button>

      {/* BOTTOM TEXT */}
      <div className={mf_styles.mf_bottom}>

        <p className={mf_styles.mf_copy}>
          © Behrouz Rajaei {new Date().getFullYear()}
        </p>

        <a
          href="documentation/legal-notice"
          className={mf_styles.mf_legal}
        >
          Legal notice
        </a>

      </div>

    </footer>
  );
}
