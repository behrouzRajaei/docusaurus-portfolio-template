import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./projects.module.css";

const projects = [
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
    github: "https://github.com/behrouzRajaei/Conduit-Deployme"
  },

  {

    name: "Docusaurus Portfolio",
    image: "/img/projects/porfolio.png",
    skills: ["css.svg", "docusaurus.svg"],
    description:
      "Personal developer portfolio built with Docusaurus to present projects, documentation, and DevOps experience. The site combines structured documentation with a responsive interface to showcase technical work and development practices.",
    documentation: "documentation/projects/docusaurus-portfolio",
    github: "https://github.com/behrouzRajaei/docusaurus-portf"
  },
  {
    name: "CV",
    image: "/img/projects/cv.png",
    skills: ["html.svg", "css.svg"],
    description:
      "Responsive personal CV website created using HTML and CSS to present professional experience, projects, and technical skills. The project focuses on clean layout design, structured content presentation, and responsive styling for different screen sizes.",
    documentation: "documentation/projects/cv",
    github: "https://github.com/behrouzRajaei/cv"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[3]);
  const baseUrl = useBaseUrl("/");
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>My project highlights</h2>

      <div className={styles.container}>

        {/* LEFT LIST */}
        <div className={styles.left}>
          <ol className={styles.projectList}>
            {(showAll ? projects : projects.slice(0, 5)).map((project, index) => (

              <li
                key={index}
                className={`${styles.projectItem} ${
                  selectedProject === project ? styles.active : ""
                } ${showAll ? styles.compactItem : ""}`}
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </li>

            ))}
          </ol>

          <div
            className={styles.seeMore}
            onClick={() => setShowAll(!showAll)}
          >
            <div className={styles.arrowBox}>
              <img
                src={useBaseUrl("/img/projects/arrow_top_right.svg")}
                alt="arrow"
              />
            </div>
            <span className={styles.seeMoreText}>
              see more projects
            </span>
          </div>
        </div>

        {/* PROJECT CARD */}
        <div className={styles.card}>

          {/* TOP */}
          <div className={styles.top}>
            <h3 className={styles.projectTitle}>
              Project {selectedProject.name}
            </h3>

            <div className={styles.skills}>
              {selectedProject.skills.map((skill, i) => (
                <div key={i} className={styles.skillItem}>
                  <img
                    src={`${baseUrl}img/projects/${skill}`}
                    alt={skill}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className={styles.content}>
            <img
              src={`${baseUrl}${selectedProject.image.replace("/img/", "img/")}`}
              alt={selectedProject.name}
              className={styles.image}
            />

            <div className={styles.text}>
              <p>{selectedProject.description}</p>

              <div className={styles.buttons}>
                {selectedProject.documentation && (
                  <a
                    href={useBaseUrl(selectedProject.documentation)}
                    className={styles.primary}
                  >
                    Documentation
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondary}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
