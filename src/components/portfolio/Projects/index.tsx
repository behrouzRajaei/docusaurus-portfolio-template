import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./projects.module.css";

const projects = [
  {
    name: "1. V-Server Setup",
    image: "/img/projects/vserver.svg",
    skills: ["security.svg", "shell.svg"],
    description:
      "Configured and secured a virtual server environment with SSH hardening, firewall rules, and system monitoring.",
    documentation: "https://github.com/behrouzRajaei/v-server-setup#readme",
    github: "https://github.com/behrouzRajaei/v-server-setup"
  },
  {
    name: "2. Baby Tools Shop",
    image: "/img/projects/baby.svg",
    skills: ["docker.svg", "shell.svg"],
    description:
      "A simple Django-based web application for managing a baby tools shop. The project is containerized with Docker and follows clean code conventions.",
    documentation: "https://github.com/behrouzRajaei/baby-tools-shop#readme",
    github: "https://github.com/behrouzRajaei/baby-tools-shop"
  },
  {
    name: "3. Truck Signs API",
    image: "/img/projects/truck.svg",
    skills: ["docker.svg", "shell.svg", "python.svg"],
    description:
      "An online store backend built with Django and Django REST Framework for selling and customizing truck vinyl signs. The system allows administrators to manage categories, products, lettering items, and customer orders, while exposing a REST API for frontend or external integrations.",
    documentation: "https://github.com/behrouzRajaei/truck_signs_api#readme",
    github: "https://github.com/behrouzRajaei/truck_signs_api"
  },
  {
    name: "4. Juice Shop Meister",
    image: "/img/projects/juiceshop.png",
    skills: ["security.svg", "python.svg"],
    description:
      "This project contains my completed hacking challenges from the OWASP Juice Shop application. The content of this repository is provided solely for educational and ethical security research purposes.",
    documentation: "https://github.com/behrouzRajaei/juice-shop-docusaurus#readme",
    github: "https://github.com/behrouzRajaei/juice-shop-docusaurus"
  },
  {
    name: "5. Wordpress",
    image: "/img/projects/wordpress.svg",
    skills: ["shell.svg", "docker.svg"],
    description:
      "This repository contains a Docker-based setup for running WordPress with a MySQL database. The project demonstrates how to run WordPress in a reproducible way using Docker Compose with persistent storage and environment configuration.",
    documentation: "https://github.com/behrouzRajaei/wordpress-docker#readme",
    github: "https://github.com/behrouzRajaei/wordpress-docker"
  },
  {
    name: "6. Conduit Container",
    image: "/img/projects/conduit_docker.svg",
    skills: ["shell.svg", "docker.svg", "yaml.svg"],
    description:
      "A fully dockerized implementation of the RealWorld / Conduit application using Django (REST Framework) for the backend and Angular for the frontend. The project follows a modular architecture and is designed to be deployed easily using Docker and Docker Compose.",
    documentation: "https://github.com/behrouzRajaei/conduit-container#readme",
    github: "https://github.com/behrouzRajaei/conduit-container"
  },
  {
    name: "7. Minecraft-Server",
    image: "/img/projects/minecraft.svg",
    skills: ["shell.svg", "docker.svg", "yaml.svg"],
    description:
      "This repository contains a fully dockerized Minecraft Java Edition server. The project is designed to run a Minecraft server inside a Docker container without using any pre-built images.",
    documentation: "https://github.com/behrouzRajaei/minecraft-docker-server-new#readme",
    github: "https://github.com/behrouzRajaei/minecraft-docker-server-new"
  },
  {
    name: "8. Conduit Deployment",
    image: "/img/projects/conduit_deploy.svg",
    skills: ["cicd.svg", "shell.svg", "docker.svg", "yaml.svg"],
    description:
      "A CI/CD pipeline implementation using GitHub Actions for automated deployment of a dockerized Conduit application.",
    documentation: "https://github.com/behrouzRajaei/Conduit-Deployment#readme",
    github: "https://github.com/behrouzRajaei/Conduit-Deployment"
  },
  {
    name: "9. Docusaurus-Portfolio",
    image: "/img/projects/porfolio.png",
    skills: ["css.svg", "docusaurus.svg"],
    description:
      "Developed a responsive portfolio using Docusaurus with structured content and modern UI.",
    documentation: "https://github.com/behrouzRajaei/docusaurus-portfolio#readme",
    github: "https://github.com/behrouzRajaei/docusaurus-portfolio"
  },
  {
    name: "10. CV",
    image: "/img/projects/cv.png",
    skills: ["html.svg", "css.svg"],
    description:
      "Designed and built a personal CV using HTML and CSS with a clean and responsive layout.",
    documentation: null,
    github: null
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const baseUrl = useBaseUrl("/");

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>My project highlights</h2>

      <div className={styles.container}>

        <div className={styles.left}>
          {projects.map((project, index) => (
            <p
              key={index}
              className={styles.projectItem}
              onClick={() => setSelectedProject(project)}
            >
              {project.name}
            </p>
          ))}
        </div>

        <div className={styles.card}>

          <div className={styles.top}>
            <h3 className={styles.projectTitle}>
              {selectedProject.name}
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

          <div className={styles.content}>
            <img
              src={`${baseUrl}${selectedProject.image.replace("/img/", "img/")}`}
              alt={selectedProject.name}
              className={styles.image}
            />

            <div className={styles.text}>
              <p>{selectedProject.description}</p>

              <div className={styles.buttons}>
                {selectedProject.documentation ? (
                  <a
                    href={selectedProject.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primary}
                  >
                    Documentation
                  </a>
                ) : (
                  <button
                    className={`${styles.primary} ${styles.disabledButton}`}
                    disabled
                  >
                    Coming Soon
                  </button>
                )}

                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondary}
                  >
                    GitHub
                  </a>
                ) : (
                  <button
                    className={`${styles.secondary} ${styles.disabledButton}`}
                    disabled
                  >
                    Coming Soon
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
