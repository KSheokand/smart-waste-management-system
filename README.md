# ♻️ Smart Waste Management System (SWMS)

A full-stack MERN (MongoDB, Express.js, React/Next.js, Node.js) application designed to optimize urban waste management using real-time monitoring, smart bin data simulation, and an interactive map dashboard for effective decision-making.

---

## 🚀 Features

- 📍 Live bin location tracking on a dynamic Leaflet.js map
- 📊 Real-time simulation of bin fill levels
- 🔔 Alerts for bins filled over 80%
- 📈 Interactive dashboard to visualize bin status
- 🔐 Secure authentication using JWT
- 🎯 Role-based access for Admins and Users

---

## 🧰 Tech Stack

### Frontend (`frontend/`)
- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Leaflet.js](https://leafletjs.com/) for interactive maps
- Axios, React Hook Form, Zustand

### Backend (`backend/`)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + Mongoose
- JWT Authentication
- RESTful APIs

---

## 📁 Project Structure
smart-waste-management-system/
│
├── backend/
│ ├── config/ # MongoDB connection
│ ├── controllers/ # Logic for routes
│ ├── middleware/ # Auth middleware
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API endpoints
│ └── server.js # Server entry point
│
├── frontend/
│ ├── app/ # App Router structure
│ ├── components/ # Reusable UI elements
│ ├── lib/ # API utility functions
│ ├── public/ # Static assets
│ ├── styles/ # Global styles (Tailwind)
│ └── utils/ # State/store management
│
└── README.md
