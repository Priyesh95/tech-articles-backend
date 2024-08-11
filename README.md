# Backend for Technology Articles Dashboard

## Overview

This is the backend component for the Technology Articles Dashboard application. It provides APIs for user authentication, article management, and dashboard data. The backend is built using Express and connects to MongoDB for data storage and Redis for caching.

The frontend of the application is maintained in a separate repository. You can find it [here](https://github.com/priyesh95/tech-articles-frontend).

## Features

- User authentication (register and login)
- CRUD operations for articles
- Dashboard API for most viewed and most liked articles using redis cache

## Installation

### Prerequisites

- Node.js and npm installed.
- Redis server running.
- MongoDB server running.

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/priyesh95/tech-articles-backend.git
   cd tech-articles-backend
