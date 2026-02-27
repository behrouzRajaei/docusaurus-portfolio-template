import React from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from './skills.module.css';

const skillGroups = [
  [
    {
      name: "HTML",
      icon: "/img/skills/html.svg",
      description: "Developed structured and semantic HTML layouts to build scalable and maintainable web applications. Implemented user-friendly navigation menus to improve accessibility and usability. Focused on clean markup for better SEO performance and search engine indexing. Created well-organized page structures to support responsive and dynamic content. Built accessible interfaces following modern web standards. Integrated forms such as contact forms and login pages with proper validation structure. Ensured compatibility across different browsers and devices. Optimized HTML structure for performance and readability. Applied best practices for semantic tagging and content hierarchy. Continuously improved markup to support modern frontend frameworks and tools."
    },
    {
      name: "CSS",
      icon: "/img/skills/css.svg",
      description: "Designed responsive web interfaces using modern CSS techniques such as Flexbox and Grid. Created adaptive layouts that work seamlessly across mobile, tablet, and desktop devices. Implemented smooth transitions, animations, and hover effects to enhance user interaction. Focused on building clean and maintainable styling systems. Improved UI/UX by applying consistent spacing, alignment, and visual hierarchy. Styled navigation menus, forms, and interactive components. Worked with reusable design patterns for scalable frontends. Ensured cross-browser compatibility and visual consistency. Optimized styles for performance and fast rendering. Continuously refined design elements to create modern and user-friendly interfaces."
    },
    {
      name: "CI/CD with GitHub Actions",
      icon: "/img/skills/cicd.svg",
      description: "Designed and implemented CI/CD pipelines using GitHub Actions to automate development workflows. Built automated processes for code integration, testing, and deployment. Reduced manual intervention by creating reliable automation pipelines. Configured workflows to trigger on commits and pull requests. Improved deployment speed and consistency across environments. Integrated build and test stages for better code quality assurance. Managed environment variables securely within pipelines. Ensured stable and repeatable deployments. Applied best practices for continuous integration and delivery. Continuously optimized pipelines for efficiency and scalability."
    }
  ],
  [
    {
      name: "YAML",
      icon: "/img/skills/yaml.svg",
      description: "Created and managed YAML configuration files for defining CI/CD pipelines and automation workflows. Structured complex configurations in a clear and maintainable way. Used YAML to configure GitHub Actions and deployment pipelines. Enabled reusable and modular workflow definitions. Improved readability and consistency of configuration files. Applied best practices for managing environment configurations. Reduced errors by organizing structured data properly. Used YAML for infrastructure-related configurations and automation tasks. Ensured compatibility across different systems and tools. Maintained clean and scalable configuration structures."
    },
    {
      name: "Shell Scripting",
      icon: "/img/skills/shell.svg",
      description: "Developed shell scripts to automate repetitive system and deployment tasks. Simplified server management and operational workflows. Automated environment setup and configuration processes. Reduced manual errors through scripting automation. Managed file operations, permissions, and process control in Linux environments. Integrated shell scripts into CI/CD pipelines for automation. Improved efficiency of development and deployment cycles. Used scripting for debugging and monitoring system behavior. Enhanced productivity by automating routine operations. Continuously refined scripts for performance and reliability."
    },
    {
      name: "IT Security",
      icon: "/img/skills/security.svg",
      description: "Applied security best practices to protect applications and systems from vulnerabilities. Secured login pages and user authentication mechanisms. Managed sensitive data using environment variables and secure storage methods. Implemented measures to prevent common security risks. Focused on system hardening and secure configurations. Ensured safe handling of credentials and tokens. Monitored potential security threats and risks. Followed secure coding practices in development workflows. Improved overall system reliability and protection. Continuously enhanced knowledge of security standards and practices."
    }
  ],
  [
    {
      name: "Container",
      icon: "/img/skills/docker.svg",
      description: "Containerized applications using Docker to ensure consistent environments across development and production. Built and managed container images for scalable deployments. Simplified application setup and dependency management. Enabled portability of applications across different systems. Integrated Docker into CI/CD workflows for automated deployments. Improved system reliability and consistency. Managed container configurations and networking. Reduced environment-related issues through containerization. Applied best practices for container security and optimization. Continuously improved container workflows for efficiency."
    },
    {
      name: "Static Site Generator",
      icon: "/img/skills/docusauros.svg",
      description: "Developed fast and secure websites using static site generators such as Docusaurus. Built structured content systems with efficient navigation menus. Implemented responsive layouts for better user experience. Created optimized static pages for performance and SEO. Integrated contact forms and user interaction features. Ensured fast loading times and improved accessibility. Managed content organization and site structure effectively. Applied modern frontend practices in static environments. Reduced server load through static rendering. Continuously improved site performance and usability."
    },
    {
      name: "Python",
      icon: "/img/skills/python.svg",
      description: "Developed automation scripts and backend logic using Python for various use cases. Automated repetitive tasks to improve development efficiency. Processed data and integrated system-level operations. Built scripts for deployment, monitoring, and maintenance. Used Python for problem-solving and workflow optimization. Integrated Python with system tools and services. Improved productivity through scripting and automation. Maintained clean and readable code structures. Applied best practices for scalable development. Continuously expanded knowledge in Python and related technologies."
    }
  ]
];

export default function Skills() {
  
  const baseUrl = useBaseUrl('/');  

  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.title}>My Skills</h2>

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

                <div className={styles.hoverText}>
                  {skill.description}
                </div>

                <p className={styles.skillName}>
                  {skill.name}
                </p>

              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}


