import React from 'react';
import styles from './hero.module.css';
import HeroImage from '/img/profile.png';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>

        <div className={styles.textBlock}>

          <p className={styles.titleLine1}>
            Hey there. 👋 I am
          </p>

          <h1 className={styles.name}>
            Behrouz Rajaei
          </h1>

          <p className={styles.subtitle}>
            DevSecOps Engineer
          </p>

          <p className={styles.description}>
            I am a passionate DevSecOps Engineer with experience in designing and
            maintaining secure, scalable, and high-performance systems.
            I constantly explore new technologies, automate workflows,
            and implement best practices to ensure reliability and security
            in modern CI/CD pipelines and cloud infrastructures.
          </p>

          <a href="#contact" className={styles.button}>
            Contact me
          </a>

        </div>

        <div className={styles.imageBlock}>
          <img src={HeroImage} alt="Behrouz Rajaei" />
        </div>

      </div>
    </section>
  );
}
