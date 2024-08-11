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

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/technology-articles-backend.git
   cd technology-articles-backend
   
2. Install dependencies:

   ```bash
   npm install

3. Create a .env file in the root directory and add the following environment variables:

   ```bash
   MONGO_URI=mongodb://localhost:27017/yourdbname
   REDIS_URL=redis://localhost:6379
   PORT=5000

4. Start the server:

   ```bash
   npm start

The backend server will be available at http://localhost:5000.
