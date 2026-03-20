import React, { useRef, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import mh3_styles from "./skills.mobile.module.css";

const skillGroups = [
    [
    {
      name: "HTML",
      icon: "/img/skills/html.svg",
      points: [
        "User-friendly navigation menus",
        "Responsive web design",
        "Contact forms and login pages",
        "Transitions, animations and hover effect"
      ]
    },
    {
      name: "CSS",
      icon: "/img/skills/css.svg",
      points: [
        "User-friendly navigation menus",
        "Responsive web design",
        "Contact forms and login pages",
        "Transitions, animations and hover effect"
      ]
    },
    {
      name: "CI/CD with GitHub Actions",
      icon: "/img/skills/cicd.svg",
      points: [
        "Automated builds and tests",
        "Pre-built actions for common tasks",
        "Push, pull request, or schedule workflows",
        "Automated deployments"
      ]
    }
  ],
  [
    {
      name: "YAML",
      icon: "/img/skills/yaml.svg",
      points: [
        "Kubernetes deployment configuration",
        "Store database connections",
        "Environment-specific variables",
        "Represent lists and maps"
      ]
    },
    {
      name: "Shell Scripting",
      icon: "/img/skills/shell.svg",
      points: [
        "Adding new users and permissions",
        "Performing calculations and analysis",
        "Conditional statements and loops",
        "Automation scripts"
      ]
    },
    {
      name: "Container",
      icon: "/img/skills/Docker1.svg",
      points: [
        "CI/CD pipelines",
        "Automate build, test, deploy",
        "Microservices-based applications"
      ]
    }
  ],
  [
    {
      name: "IT-Security",
      icon: "/img/skills/security.svg",
      points: [
        "Simulate attacks and identify vulnerabilities",
        "Multi-factor authentication setup",
        "Login security",
        "Authentication and authorization mechanisms"
      ]
    },
    {
      name: "Static Site Generator",
      icon: "/img/skills/docusauros.svg",
      points: [
        "Search functionality",
        "Static website customization",
        "Tags, categories and RSS feeds",
        "Translation support"
      ]
    },
    {
      name: "Python",
      icon: "/img/skills/python.svg",
      points: [
        "Build APIs",
        "Spam filtering and recommendation systems",
        "Automate software testing",
        "Tkinter, PyQt, Kivy libraries"
      ]
    }
  ]

];

export default function MobileSkills() {
  const baseUrl = useBaseUrl("/");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const width = window.innerWidth;
    setActiveIndex(Math.round(scrollLeft / width));
  };

  return (
    <section id="skills" className={mh3_styles.mh3_section}>
      
      <div className={mh3_styles.mh3_header}>
        <h2 className={mh3_styles.mh3_title}>
          My skills
        </h2>
      </div>

      <div
        className={mh3_styles.mh3_slider}
        ref={sliderRef}
        onScroll={handleScroll}
      >
        {skillGroups.map((group, index) => (
          <div key={index} className={mh3_styles.mh3_slide}>
            <div className={mh3_styles.mh3_slideContent}>
              
              {group.map((skill, i) => (
                <div key={i} className={mh3_styles.mh3_card}>
                  <div className={mh3_styles.mh3_cardRow}>

                    <div className={mh3_styles.mh3_iconBox}>
                      <img
                        src={`${baseUrl}${skill.icon.replace("/img/", "img/")}`}
                        alt={skill.name}
                      />
                      <span>
                        {skill.name.includes(" ")
                          ? skill.name.split(" ").join("\n")
                          : skill.name}
                      </span>
                    </div>

                    <ul className={mh3_styles.mh3_text}>
                      {skill.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>

      <div className={mh3_styles.mh3_dots}>
        {[0,1,2].map((dot) => (
          <span
            key={dot}
            className={
              dot === activeIndex
                ? `${mh3_styles.dot} ${mh3_styles.activeDot}`
                : mh3_styles.dot
            }
          ></span>
        ))}
      </div>

    </section>
  );
}
