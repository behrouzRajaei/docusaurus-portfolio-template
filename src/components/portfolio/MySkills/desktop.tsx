import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./skills.module.css";

const skillGroups = [
  [
    {
      name: "HTML",
      icon: "/img/skills/html.svg",
      points: [
        "User-friendly navigation menus",
        "Responsive web design",
        "Contact forms and login pages",
        "Transitions, animations and hover effect",
      ],
    },
    {
      name: "Shell Scripting",
      icon: "/img/skills/shell.svg",
      points: [
        "Automation scripts",
        "User management",
        "Conditional loops",
        "System configuration",
      ],
    },
    {
      name: "Python",
      icon: "/img/skills/python.svg",
      points: [
        "Build APIs",
        "Recommendation systems",
        "Automate software testing",
        "Tkinter, PyQt, Kivy libraries",
      ],
    },
  ],
  [
    {
      name: "CSS",
      icon: "/img/skills/css.svg",
      points: [
        "User-friendly navigation menus",
        "Responsive web design",
        "Contact forms and login pages",
        "Transitions, animations and hover effect",
      ],
    },
    {
      name: "YAML",
      icon: "/img/skills/yaml.svg",
      points: [
        "Kubernetes deployment configuration",
        "Store database connections",
        "Environment-specific variables",
        "Represent lists and maps",
      ],
    },
    {
      name: "Container",
      icon: "/img/skills/Docker1.svg",
      points: [
        "CI/CD pipelines",
        "Automate build, test, deploy",
        "Microservices-based applications",
      ],
    },
  ],
  [
    {
      name: "CI/CD",
      icon: "/img/skills/cicd.svg",
      points: [
        "Automated builds and tests",
        "Pre-built actions for common tasks",
        "Push, pull request workflows",
        "Automated deployments",
      ],
    },
    {
      name: "IT Security",
      icon: "/img/skills/security.svg",
      points: [
        "Simulate attacks and identify vulnerabilities",
        "Multi-factor authentication setup",
        "Login security",
        "Authentication and authorization mechanisms",
      ],
    },
    {
      name: "Static Site",
      icon: "/img/skills/docusauros.svg",
      points: [
        "Search functionality",
        "Static website customization",
        "Tags, categories and RSS feeds",
        "Translation support",
      ],
    },
  ],
];

export default function Skills() {

  const baseUrl = useBaseUrl("/");
  const [active,setActive] = useState(0);

  const handleScroll = (e:React.UIEvent<HTMLDivElement>)=>{
    const width = e.currentTarget.clientWidth;
    const page = Math.round(e.currentTarget.scrollLeft / width);
    setActive(page);
  };

  return (
    <section className={styles.skillsSection} id="skills">

      <h2 className={styles.title}>My skills</h2>

      {/* DESKTOP */}

      <div className={styles.groupsWrapper}>

        {skillGroups.map((group,rowIndex)=>(
          <div className={styles.row} key={rowIndex}>

            {group.map((skill,index)=>(
              <div className={styles.card} key={index}>

                <img
                  src={`${baseUrl}${skill.icon.replace("/img/","img/")}`}
                  alt={skill.name}
                  className={styles.icon}
                />

                <div className={styles.hoverContent}>

                  <p className={styles.hoverIntro}>
                    How I used this skills
                  </p>

                  <ul className={styles.hoverList}>
                    {skill.points.map((p,i)=>(
                      <li key={i}>{p}</li>
                    ))}
                  </ul>

                </div>

                <p className={styles.skillName}>
                  {skill.name}
                </p>

              </div>
            ))}

          </div>
        ))}

      </div>


      {/* MOBILE */}

      <div className={styles.carousel} onScroll={handleScroll}>

        {skillGroups.map((group,i)=>(
          <div className={styles.slide} key={i}>

            <div className={styles.mobileCard}>

              {group.map((skill,index)=>(
                <div className={styles.skillRow} key={index}>

                  <div className={styles.iconColumn}>

                    <img
                      src={`${baseUrl}${skill.icon.replace("/img/","img/")}`}
                      alt={skill.name}
                      className={styles.mobileIcon}
                    />

                    <span className={styles.mobileName}>
                      {skill.name}
                    </span>

                  </div>

                  <ul className={styles.mobileList}>
                    {skill.points.map((p,x)=>(
                      <li key={x}>{p}</li>
                    ))}
                  </ul>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>


      <div className={styles.pageIndicator}>

        {skillGroups.map((_,i)=>(
          <div
            key={i}
            className={`${styles.dot} ${active===i ? styles.activeDot : ""}`}
          />
        ))}

      </div>

    </section>
  );
}
