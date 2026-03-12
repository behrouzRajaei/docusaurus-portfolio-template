import React, { useEffect, useState } from 'react';
import styles from './header.module.css';

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const top = element.offsetTop;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setShow(true);
        setLastScrollY(0);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setShow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${show ? styles.show : styles.hide}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <a onClick={() => scrollToSection("hero")} className={styles.link}>About me</a>
          <a onClick={() => scrollToSection("skills")} className={styles.link}>My Skills</a>
          <a onClick={() => scrollToSection("projects")} className={styles.link}>My Projects</a>
          <a onClick={() => scrollToSection("contact")} className={styles.link}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
