import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./contact.module.css";

export default function Contact() {
  const baseUrl = useBaseUrl("/");

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrapper}>

        {/* HEADLINE */}
        <div className={styles.headlineRow}>
          <h2 className={styles.title}>Contact me</h2>
          <p className={styles.subtitle}>
            Looking forward to hearing from you!
          </p>
        </div>

        {/* CONTENT */}
        <div className={styles.contentRow}>

          {/* TEXT */}
          <div className={styles.text}>
            <p>
              Feel free to reach out with job offers or exciting opportunities.
              I am currently looking for a DevOps or DevSecOps role where I can
              contribute to building secure, scalable, and automated
              infrastructure solutions.
              I enjoy working in collaborative environments where continuous
              improvement, automation, and security best practices are part of
              the culture.
              I am open to remote work and also willing to relocate for the
              right opportunity. Let’s build something great together.
            </p>
          </div>

          {/* CONTACT LINKS */}
          <div className={styles.contacts}>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                
                <img
                  src={`${baseUrl}img/contact/mail.svg`}
                  alt="mail"
                />
              </div>
              <span>bmd.rajaei@mail.de</span>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconCircle}>
                <img
                  src={`${baseUrl}img/contact/linkedin.svg`}
                  alt="linkedin"
                />
              </div>
              <a
                href="https://www.linkedin.com/in/behrouz-rajaei/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkText}
              >
                LinkedIn Profile
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
