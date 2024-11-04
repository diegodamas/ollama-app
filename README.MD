# Full-Stack Text Request Application

This project is a full-stack application that uses FastAPI for the backend and React for the frontend. The backend provides an API that processes user text requests with a chat model (`ollama.chat`) and returns the response. The frontend is a simple React interface that allows users to submit text and view the response from the backend.

---

## Features

- **FastAPI Backend**: A simple, robust backend built with FastAPI, handling POST requests for text processing.
- **React Frontend**: A user-friendly interface built with React, allowing users to enter text and view responses.
- **Dockerized Setup**: Both backend and frontend are containerized using Docker, enabling smooth deployment and scaling.
- **Cross-Origin Resource Sharing (CORS)**: Configured CORS settings to allow the React frontend to communicate with the FastAPI backend without issues.

## Requirements

- Docker and Docker Compose installed on your machine
- (Optional) Node.js and npm for local development of the frontend


## Setup

1. Setup Docker Compose: Use Docker Compose to build and run the application with the following command:

```bash
docker-compose up --build