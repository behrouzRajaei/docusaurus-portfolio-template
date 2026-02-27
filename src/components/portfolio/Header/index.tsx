import React, { useEffect, useState } from 'react';
import styles from './header.module.css';

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${show ? styles.show : styles.hide}`}>

      <nav className={styles.nav}>
        <a href="#about">About me</a>
        <a href="#skills">My Skills</a>
        <a href="#projects">My projects</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  );
}
