import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import mc_styles from "./contact.mobile.module.css";

export default function MobileContact() {
  const mc_baseUrl = useBaseUrl("/");

  return (
    <section id="contact" className={mc_styles.mc_section}>

      {/* TOP */}
      <div className={mc_styles.mc_top}>

        <h2 className={mc_styles.mc_title}>
          Contact me
        </h2>

        <p className={mc_styles.mc_description}>
          Feel free to reach out with job offers or exciting opportunities.
          I am currently looking for a DevOps or DevSecOps role where I can
          contribute to building secure, scalable, and automated infrastructure
          solutions. I enjoy working in collaborative environments where
          continuous improvement, automation, and security best practices are
          part of the culture. I am open to remote work and also willing to
          relocate for the right opportunity. Let’s build something great
          together.
        </p>

      </div>

      {/* BOTTOM */}
      <div className={mc_styles.mc_bottom}>

        <p className={mc_styles.mc_subtitle}>
          Looking forward to hearing from you!
        </p>

        <div className={mc_styles.mc_contacts}>

          {/* EMAIL */}
          <div className={mc_styles.mc_item}>
            <div className={mc_styles.mc_icon}>
              <img
                src={`${mc_baseUrl}img/contact/email1.svg`}
                alt="email"
              />
            </div>

            <span className={mc_styles.mc_text}>
              bmd.rajaei@mail.de
            </span>
          </div>

          {/* LINKEDIN */}
          <div className={mc_styles.mc_item}>
            <div className={mc_styles.mc_icon}>
              <img
                src={`${mc_baseUrl}img/contact/linkedln1.svg`}
                alt="linkedin"
              />
            </div>

            <a
              href="https://www.linkedin.com/in/behrouz-rajaei/"
              target="_blank"
              rel="noopener noreferrer"
              className={mc_styles.mc_link}
            >
              Profile Page
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
