import React, { useEffect, useState } from "react";
import mh_styles from "./header.mobile.module.css";

export default function MobileHeader() {
  const [mh_menuOpen, setMh_menuOpen] = useState(false);
  const [mh_active, setMh_active] = useState("");

  // show / hide header
  const [mh_show, setMh_show] = useState(true);
  const [mh_lastScrollY, setMh_lastScrollY] = useState(0);

  // scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (mh_menuOpen) return; 

      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setMh_show(true);
      } else if (currentScrollY > mh_lastScrollY) {
        setMh_show(false); 
      } else {
        setMh_show(true);
      }

      setMh_lastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mh_lastScrollY, mh_menuOpen]);

  // scroll to section
  const mh_scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setMh_menuOpen(false);
      setMh_active("");
    }
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`${mh_styles.mh_header} ${
          mh_show ? mh_styles.mh_show : mh_styles.mh_hide
        }`}
      >
        <div
          className={mh_styles.mh_menuButton}
          onClick={() => setMh_menuOpen(true)}
        >
          <div className={mh_styles.mh_menuLine}></div>
          <div className={mh_styles.mh_menuLine}></div>
          <div className={mh_styles.mh_menuLine}></div>
        </div>
      </header>

      {/* OVERLAY */}
      {mh_menuOpen && (
        <div className={mh_styles.mh_overlay}>
          {/* CLOSE */}
          <div className={mh_styles.mh_closeRow}>
            <div
              className={mh_styles.mh_close}
              onClick={() => {
                setMh_menuOpen(false);
                setMh_active("");
              }}
            >
              <div className={mh_styles.mh_closeLine}></div>
              <div className={mh_styles.mh_closeLine}></div>
            </div>
          </div>

          {/* MENU */}
          <div className={mh_styles.mh_menu}>
            <div
              className={`${mh_styles.mh_item} ${
                mh_active === "hero" ? mh_styles.mh_active : ""
              }`}
              onClick={() => mh_scrollTo("hero")}
            >
              About me
            </div>

            <div
              className={`${mh_styles.mh_item} ${
                mh_active === "skills" ? mh_styles.mh_active : ""
              }`}
              onClick={() => mh_scrollTo("skills")}
            >
              My skills
            </div>

            <div
              className={`${mh_styles.mh_item} ${
                mh_active === "projects" ? mh_styles.mh_active : ""
              }`}
              onClick={() => mh_scrollTo("projects")}
            >
              My projects
            </div>

            <div
              className={`${mh_styles.mh_item} ${
                mh_active === "contact" ? mh_styles.mh_active : ""
              }`}
              onClick={() => mh_scrollTo("contact")}
            >
              Contact
            </div>
          </div>
        </div>
      )}
    </>
  );
}
