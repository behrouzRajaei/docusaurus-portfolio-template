import React from "react";
import mh2_styles from "./hero.mobile.module.css";
import HeroImage from "/img/profile.png";

export default function MobileHero() {
  return (
    <section id="hero" className={mh2_styles.mh2_section}>

      <div className={mh2_styles.mh2_container}>

        {/* TEXT BLOCK */}
        <div className={mh2_styles.mh2_textBlock}>

          {/* TITLES */}
          <div className={mh2_styles.mh2_titles}>
            <p className={mh2_styles.mh2_titleLine1}>
              Hey there. 👋 I am
            </p>

            <h1 className={mh2_styles.mh2_name}>
              Behrouz Rajaei
            </h1>

            <p className={mh2_styles.mh2_subtitle}>
              DevSecOps Engineer
            </p>
          </div>

          {/* IMAGE */}
          <img
            src={HeroImage}
            alt="Behrouz Rajaei"
            className={mh2_styles.mh2_image}
          />

          {/* DESCRIPTION */}
          <p className={mh2_styles.mh2_desc}>
            I am a passionate DevSecOps Engineer with experience in designing and
            maintaining secure, scalable, and high-performance systems.
            I constantly explore new technologies, automate workflows,
            and implement best practices to ensure reliability and security
            in modern CI/CD pipelines and cloud infrastructures.
          </p>

          {/* BUTTON */}
          <a href="#contact" className={mh2_styles.mh2_button}>
            Contact me
          </a>

        </div>

      </div>

    </section>
  );
}
