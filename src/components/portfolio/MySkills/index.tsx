import React from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from './skills.module.css';

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
      name: "IT-Security",
      icon: "/img/skills/security.svg",
      points: [
        "Simulate attacks and identify vulnerabilities",
        "Multi-factor authentication setup",
        "Login security",
        "Authentication and authorization mechanisms"
      ]
    }
  ],
  [
    {
      name: "Container",
      icon: "/img/skills/Docker1.svg",
      points: [
        "CI/CD pipelines",
        "Automate build, test, deploy",
        "Microservices-based applications"
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

export default function Skills() {

  const baseUrl = useBaseUrl('/');

  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.title}>My skills</h2>

      <div className={styles.groupsWrapper}>
        {skillGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.row}>
            {group.map((skill, index) => (
              <div key={index} className={styles.card}>

                <img
                  src={`${baseUrl}${skill.icon.replace('/img/', 'img/')}`}
                  alt={skill.name}
                  className={styles.icon}
                />

                <div className={styles.hoverContent}>
                  <p className={styles.hoverIntro}>
                    How I used this skills
                  </p>

                  <ul className={styles.hoverList}>
                    {skill.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>


                <p className={styles.skillName}>
                  {skill.name.includes(" ")
                    ? skill.name.split(" ").slice(0, Math.ceil(skill.name.split(" ").length / 2)).join(" ") + "\n" +
                      skill.name.split(" ").slice(Math.ceil(skill.name.split(" ").length / 2)).join(" ")
                    : skill.name}
                </p>


              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
