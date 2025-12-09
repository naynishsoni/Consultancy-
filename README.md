# 🚀 MERN Consultancy Agency Application
A high-performance, full-stack consultancy agency website built with the MERN stack (MongoDB, Express, React, Node.js). This application features a premium user interface with advanced animations, a secure admin panel for content management, and dynamic data handling.
## ✨ Features
### 🎨 Frontend (User Facing)
- **Premium UI/UX**: Designed with a corporate "Slate Blue & Orange" theme using **Tailwind CSS**.
- **Advanced Animations**: Smooth scroll, fade-in, and hover effects powered by **Framer Motion**.
- **Glassmorphism**: Modern sticky navbar with blur effects.
- **Dynamic Sections**:
  - **Hero Section**: Animated introduction with gradient backgrounds.
  - **Featured Projects**: Displays projects with hover-lift effects.
  - **Happy Clients**: Testimonial carousel/grid with client images.
  - **Why Choose Us & About**: Informative sections with iconography.
  - **Contact Form**: Fully functional form submitting to the backend.
### 🛡️ Admin Panel (Secure)
- **Authentication**: Protected dashboard requiring login.
- **Project Management**: Add new case studies with titles, descriptions, and images.
- **Client Management**: Add testimonials with client details.
- **Image Cropping**: Integrated `react-image-crop` to force a **9:7 aspect ratio** on uploads.
- **Inbox**: View messages submitted via the contact form.
- **Subscribers**: View email newsletter subscriptions.
### ⚙️ Backend (API)
- **RESTful API**: Modular routes for Projects, Clients, Contacts, and Auth.
- **Image Handling**: Local storage via `Multer` with static file serving.
- **Database**: MongoDB with Mongoose schemas.
- **Seeding**: Script to auto-populate the database with premium dummy content.
---
## 🛠️ Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Axios, React Router v6.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Multer.
- **Tools**: PostCSS, Autoprefixer, React Image Crop, Lucide Icons.
---
## 🚀 Getting Started
### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or Atlas URI)
### 1. Clone the Repository
```bash
git clone https://github.com/naynishsoni/Consultancy-.git
cd "d:\Flippr AI" 
# or wherever you cloned it
```
### 2. Setup Backend
```bash
cd server
npm install
# Create a .env file if not exists (see below)
npm run dev
```
*Server runs on `http://localhost:5000`*
### 3. Setup Frontend
```bash
cd client
npm install
npm run dev
```
*Client runs on `http://localhost:5173` (or similar)*
---
## 🔑 Admin Credentials
To access the Admin Panel, navigate to `/admin` in your browser.
- **Username**: `admin`
- **Password**: `admin123`
---
## 📂 Project Structure
```bash
/client
  /src
    /components  # Reusable UI components (Hero, Navbar, etc.)
    /pages       # LandingPage, AdminPanel, LoginPage
    /context     # AuthContext
    /utils       # API helpers
/server
  /models        # Mongoose Schemas
  /controllers   # Logic for API endpoints
  /routes        # API Route definitions
  /uploads       # Stored images
  server.js      # Entry point
  seed.js        # Data population script
```
## 🌱 Data Seeding
To populate the database with initial data (Projects & Clients):
```bash
cd server
node seed.js
```
---
