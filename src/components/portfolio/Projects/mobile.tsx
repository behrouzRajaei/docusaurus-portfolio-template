import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import m_styles from "./projects.mobile.module.css";

const m_projects = [
  {
    name: "V-Server Setup",
    image: "/img/projects/vserver.svg",
    skills: ["security.svg", "shell.svg"],
    description:
      "Secure Linux virtual server setup focusing on system hardening and infrastructure security. Implemented SSH hardening, firewall configuration, and monitoring to reduce attack surface and improve remote administration practices in a controlled server environment.",
    documentation: "documentation/projects/v-setup-server",
    github: "https://github.com/behrouzRajaei/v-server-setup"
  },
  {
    name: "Baby Tools",
    image: "/img/projects/baby.svg",
    skills: ["python.svg", "docker.svg", "shell.svg"],
    description:
      "Containerized Django web application for managing a small online shop. The project demonstrates backend development combined with Docker-based deployment, environment configuration, and reproducible application setup for consistent development and testing environments.",
    documentation: "documentation/projects/baby-tools",
    github: "https://github.com/behrouzRajaei/baby-tools-shop"
  },
  {
    name: "Truck Signs",
    image: "/img/projects/truck.svg",
    skills: ["docker.svg", "shell.svg", "python.svg"],
    description:
      "REST API backend developed with Django and Django REST Framework for managing customizable truck sign products and customer orders. The project focuses on modular backend architecture, structured API endpoints, and scalable data management for integration with frontend systems.",
    documentation: "documentation/projects/truck-sign-api",
    github: "https://github.com/behrouzRajaei/truck_signs_api"
  },
  {
    name: "Juice Shop",
    image: "/img/projects/juice.svg",
    skills: ["security.svg", "python.svg"],
    description:
      "Documentation of completed OWASP Juice Shop security challenges. The project analyzes common web vulnerabilities such as XSS, authentication flaws, and access control issues while explaining exploitation techniques and the security concepts behind each challenge.",
    documentation: "documentation/projects/juice-shop",
    github: "https://github.com/behrouzRajaei/juice-shop-docusaurus"
  },
  {
    name: "Minecraft",
    image: "/img/projects/minecraft.svg",
    skills: ["shell.svg", "docker.svg", "yaml.svg"],
    description:
      "Dockerized Minecraft Java Edition server built without relying on pre-built container images. The environment was configured from scratch to demonstrate container creation, service deployment, and reproducible infrastructure for hosting game servers.",
    documentation: "documentation/projects/minecraft",
    github: "https://github.com/behrouzRajaei/minecraft-docker-server-new"
  },
  {
    name: "WordPress",
    image: "/img/projects/wordpress.svg",
    skills: ["shell.svg", "docker.svg"],
    description:
      "Docker-based WordPress hosting environment with a MySQL database and persistent storage. The project demonstrates how containerization simplifies application deployment, environment configuration, and reproducible infrastructure setups for web applications.",
    documentation: "documentation/projects/wordpress",
    github: "https://github.com/behrouzRajaei/wordpress-docker"
  },
  {
    name: "Conduit Container",
    image: "/img/projects/conduit_docker.svg",
    skills: ["python.svg", "shell.svg", "docker.svg", "yaml.svg"],
    description:
      "Fully containerized RealWorld Conduit application using a Django REST backend and Angular frontend. The project demonstrates modular service architecture and Docker-based orchestration, enabling consistent development environments and simplified deployment workflows.",
    documentation: "documentation/projects/conduit-container",
    github: "https://github.com/behrouzRajaei/conduit-containe"
  },
  {
    name: "Conduit Deployment",
    image: "/img/projects/conduit_deploy.svg",
    skills: ["cicd.svg", "shell.svg", "docker.svg", "yaml.svg"],
    description:
      "Automated CI/CD pipeline for deploying a containerized application using GitHub Actions. The workflow builds, tests, and deploys Docker images automatically, demonstrating DevOps practices that improve deployment reliability and reduce manual operations.",
    documentation: "documentation/projects/conduit-deployment",
    github: "https://github.com/behrouzRajaei/conduit-container/tree/deployment-clean"
  },

  {

    name: "Docusaurus Portfolio",
    image: "/img/projects/porfolio.png",
    skills: ["css.svg", "docusaurus.svg"],
    description:
      "Personal developer portfolio built with Docusaurus to present projects, documentation, and DevOps experience. The site combines structured documentation with a responsive interface to showcase technical work and development practices.",
    documentation: "documentation/projects/docusaurus-portfolio",
    github: "https://github.com/behrouzRajaei/docusaurus-portfolio-template"
  },
  {
    name: "CV",
    image: "/img/projects/cv.png",
    skills: ["html.svg", "css.svg"],
    description:
      "Responsive personal CV website created using HTML and CSS to present professional experience, projects, and technical skills. The project focuses on clean layout design, structured content presentation, and responsive styling for different screen sizes.",
    documentation: "documentation/projects/cv",
    github: "https://docs.google.com/document/d/1g_57geVNV3vm5TpD7FHu0H346SFVQBf45RL1Slfyef0/edit?tab=t.0#heading=h.gjdgxs"
  }
];

export default function MobileProjects() {
  const [m_showAll, setM_showAll] = useState(false);
  const m_baseUrl = useBaseUrl("/");

  const m_visibleProjects = m_showAll
    ? m_projects
    : m_projects.slice(0, 3);

  return (
    <section id="projects" className={m_styles.m_section}>
      
      <h2 className={m_styles.m_title}>
        My project<br />highlights
      </h2>

      <div className={m_styles.m_list}>
        {m_visibleProjects.map((project, index) => (
          <div key={index} className={m_styles.m_card}>

            <div className={m_styles.m_top}>
              <h3 className={m_styles.m_projectTitle}>
                {index + 1}. {project.name}
              </h3>

              <div className={m_styles.m_skills}>
                {project.skills.map((skill, i) => (
                  <div key={i} className={m_styles.m_skillItem}>
                    <img
                      src={`${m_baseUrl}img/projects/${skill}`}
                      alt={skill}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={m_styles.m_group}>
              <img
                src={`${m_baseUrl}${project.image.replace("/img/", "img/")}`}
                alt={project.name}
                className={m_styles.m_image}
              />

              <p className={m_styles.m_description}>
                {project.description}
              </p>
            </div>

            <div className={m_styles.m_buttons}>
              {project.documentation && (
                <a
                  href={`${m_baseUrl}${project.documentation}`}
                  className={m_styles.m_primaryBtn}
                >
                  Documentation
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={m_styles.m_secondaryBtn}
                >
                  GitHub
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

      <div className={m_styles.m_seeMoreBox}>
        <div
          className={m_styles.m_seeMoreLink}
          onClick={() => setM_showAll(!m_showAll)}
        >
          <div className={m_styles.m_arrowBox}>
            <img
              src={useBaseUrl("/img/projects/arrow_top_right.svg")}
              alt="arrow"
            />
          </div>

          <span className={m_styles.m_seeMoreText}>
            {m_showAll ? "show less projects" : "see more projects"}
          </span>
        </div>
      </div>

    </section>
  );
}         
