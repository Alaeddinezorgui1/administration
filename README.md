# administration

# Company Administration System

This project is designed to manage the administration of a company's human resources and track permissions and equipment assignments. The system is divided into two main parts: the frontend and the backend.

## Project Structure

### Frontend

The frontend is built using React and TypeScript. It provides an interface for users to manage their permissions and track the equipment assigned to them.

### Backend

The backend is built using Node.js and Express, with MongoDB as the database. It handles user authentication, data management, and API endpoints for the frontend.

## Features

- **User Management**: Track and manage employee information.
- **Permissions Tracking**: Monitor and update permissions for each user.

### Frontend

- **cd frontend**
- **npm install**
- **npm start**

### Backend

- **cd ../backend**
- **npm install**
- **npx ts-node app.ts**

Ensure MongoDB is running and properly configured. The backend will start on http://localhost:5000.

Configuration
Frontend Configuration

Ensure your frontend configuration matches the backend API endpoints. This can typically be done in a configuration file or environment variables.

Backend Configuration

Create a .env file in the backend directory with the following environment variables:
env
Copier le code
MONGODB_URI=mongodb://localhost:27017/yourdatabase
PORT=5000
JWT_SECRET=your_jwt_secret
DOMAIN=yourcompany.com
Replace yourdatabase, your_jwt_secret, and yourcompany.com with your actual database name, JWT secret, and company domain.
