---
id: wordpress
title: WordPress Docker Setup
sidebar_position: 1
slug: /projects/wordpress
---

# WordPress Docker Setup

This repository contains a Docker-based setup for running WordPress with a MySQL database.

The project is intended for learning and demonstration purposes and shows how to run WordPress in a reproducible way using Docker Compose. It includes persistent storage for the database and basic configuration through environment variables.

## Table of Contents

1. [Features](#1-features)
2. [Prerequisites](#2-prerequisites)
3. [Installation](#3-installation)
4. [Usage](#4-usage)
5. [Security & Secrets](#5-security--secrets)
6. [Entrypoint Script](#6-entrypoint-script)
7. [Contributing](#7-contributing)
8. [License](#8-license)

## 1. Features

- Run WordPress with MySQL using Docker Compose

- Persistent database storage via Docker volumes

- Environment-based configuration for easy setup

- Automatic restart policy for resiliency

## 2. Prerequisites

- Docker

- Docker Compose

- Internet connection to pull images from Docker Hub

## 3. Installation

1. Clone the repository:

```bash
git clone git@github.com:behrouzRajaei/wordpress-docker.git
cd wordpress-docker
```

2. Copy the example env file to create your own .env:

```bash
cp .env.example .env
```

You can modify the values as needed.

3. Start the services:

```bash
docker-compose up -d
```

4. Open your browser and go to:

```
http://localhost:8080
```

And follow the WordPress installation steps.

## 4. Usage

- Environment variables are defined in .env and used in docker-compose.yaml:

```
WORDPRESS_DB_HOST
WORDPRESS_DB_NAME
WORDPRESS_DB_USER
WORDPRESS_DB_PASSWORD
```

- Database and WordPress content are persisted using Docker volumes:

- db_data for MySQL

- wordpress_data for WordPress

- To modify configuration, update .env and restart:

```bash
docker-compose down
docker-compose up -d
```

## 5. Security & Secrets

- Do NOT store passwords or secrets in Git

- Use .env to store sensitive information

- .gitignore includes .env to prevent accidental commits

## 6. Entrypoint Script

- WordPress container uses the default docker-entrypoint.sh provided by the official image

- Handles initial setup and configuration automatically

## 7. Contributing

- Fork the repository and create a feature branch

- Make changes and submit a pull request

- Ensure Docker containers work and README is updated

## 8. License

This project is released under the MIT License.

## Checklist

See the project checklist:

[Project Checklist](./CHECKLIST.md)
