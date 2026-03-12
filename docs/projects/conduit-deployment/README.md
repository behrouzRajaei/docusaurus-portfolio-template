---
id: conduit-deployment
title: Conduit-Deployment
sidebar_position: 1
slug: /projects/conduit-deployment
---

# Conduit-Deployment

This project is a fully dockerized full-stack web application based on the RealWorld (Conduit) specification, implemented using FastAPI for the backend and Vite + React for the frontend.
The application is designed with a clean containerized architecture where all external traffic is routed through an Nginx frontend container, which serves the static frontend assets and acts as a reverse proxy for backend API requests.
The backend API is implemented with FastAPI and runs on Uvicorn. It is not exposed directly to the outside world; instead, it is accessed internally via Nginx using a unified /api path.

Key architectural goals of this project include:
- Clear separation of concerns between frontend and backend
- Environment-agnostic frontend builds using relative API paths
- Secure handling of configuration via environment variables
- Simple and reproducible setup using Docker and Docker Compose
- No dependency on locally installed runtimes (Python, Node.js, etc.)

---

## Table of Contents

1. [Features](#1-features)
2. [Prerequisites](#2-prerequisites)
3. [Installation](#3-installation)
4. [Usage](#4-usage)
5. [Security & Secrets](#5-security--secrets)
6. [Architecture & Request Flow](#6-Architecture--Request-Flow)
7. [API Endpoints](#7-api-endpoints)
8. [Contributing](#8-contributing)
9. [License](#9-license)

---

## 1. Features

- Fully dockerized FastAPI backend running on Uvicorn
- Modern Vite + React frontend optimized for production builds
- Nginx serving static frontend assets and acting as a reverse proxy
- Unified API access via /api (no hardcoded backend URLs in frontend)
- Environment-based configuration using .env files
- Clean separation between build-time and runtime configuration
- Backend service isolated from external network access
- Simple deployment and teardown using Docker Compose
- No requirement for local installation of Python, Node.js, or Nginx
- Ready for local development, staging, and production environments

---

## 2. Prerequisites

- Ensure the following tools are installed on your system:
- Docker
- Docker Compose (v2 or newer)
- Git
No local installation of Python, Node.js, or Nginx is required.

---

## 3. Installation

Follow the steps below to run the project locally using Docker.

### Clone the repository

```bash
git clone `<REPOSITORY_URL>`
cd `<PROJECT_ROOT>`
```

### Environment Variables

This project uses environment variables for configuration.
For security reasons, the .env file is not committed to the repository.
An example file is provided.
Create your local .env file by copying the example:

```bash
cp .env.example .env
```

Then, open the .env file and adjust the values according to your environment if needed.

### Build and Start the Services

Build all images and start the containers:

```bash
docker-compose build
docker-compose up -d
```

### Verify running containers

Check that all services are running:

```bash
docker-compose ps
```

If everything is set up correctly, both backend and frontend containers should be in the running state.

---

## 4. Usage

After successfully building and starting the containers, the application will be accessible through the frontend service, which also acts as a reverse proxy to the backend API.

### Application Architecture (Runtime)

```Plain text
Browser
   |
   |  http://`<HOST>`:`<FRONTEND_PORT>`
   v
Nginx (Frontend Container)
   |
   |-- Serves Vite build (static files)
   |
   |-- Proxies /api/* requests
   v
FastAPI Backend (Uvicorn)
```

#### Key Points

- Frontend is served as static files by Nginx.
- All API requests start with /api/.
- Nginx forwards /api/ requests to the FastAPI backend.
- Backend listens on BACKEND_PORT and serves the API.

### Frontend

The frontend application (Vite + React) is available at:

```Code
http://`<Your_Server_IP>`:8282
```

The frontend makes API calls using a relative base URL:

```env
VITE_API_URL=/api
```

This ensures that the same build works in both local and production environments without exposing backend ports directly.

### Backend API

The backend is implemented using FastAPI and runs with Uvicorn inside its own container.
The API is not meant to be accessed directly via its internal port.
Instead, it is exposed through the frontend reverse proxy.
Health check endpoint:

```Code
GET /api/health
```

Example request via frontend proxy:

```bash
curl http://`<Your_Server_IP>`:8282/api/health
```

Expected response:

```JSON
{ "status": "ok" }
```

### Container Management

Check running services:

```bash
docker-compose ps
```

View logs:

```bash
docker-compose logs backend
docker-compose logs frontend
```

Stop all services:

```bash
docker-compose down
```

### Notes

1. The backend port (8000) is used only for internal container communication
2. Nginx handles:
- Serving the frontend static files
- Proxying /api/* requests to the backend
3. No backend URL is hardcoded in the frontend build
4. Environment-specific configuration is handled via .env

---

## 5. Security & Secrets

- No secrets, tokens, or credentials are hardcoded
- All sensitive configuration is injected via environment variables
- .env files are excluded from version control
- Only .env.example is committed
- No internal service ports are exposed unnecessarily
- Backend is not directly exposed to the public internet

---

## 6. Architecture & Request Flow

```Plain text
Browser
   |
   |  http://`<HOST>:<FRONTEND_PORT>`  (e.g. http://`<Your_Server_IP>`:8282)
   v
Nginx (Frontend Container)
   |
   |-- /api/*  -------------------------------> Proxy ---> FastAPI Backend (Uvicorn)
   |        (Nginx proxy_pass to http://backend:8000)
   |
   |-- /*     --------------------------------> Serve static files (Vite build)
            (Nginx serves /usr/share/nginx/html)
```

### Runtime responsibilities

#### Frontend container (Nginx)

- Serves the built Vite app (static files)
- Proxies /api/* requests to the backend

#### Backend container (FastAPI + Uvicorn)

- Handles API requests only
- Listens on port 8000 inside the Docker network

---

## 7. API Endpoints

### Health Check

- GET /api/health

### Response:

```JSON
{
  "status": "ok"
}
```

Additional endpoints can be added following the RealWorld API specification.

---

## 8. Contributing

Contributions are welcome.

### Steps:

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

Please follow existing code style and project conventions.

---

## 9. License

This project is licensed under the MIT License.

---


## Checklist

See the project checklist:

[Project Checklist](./CHECKLIST.md)
