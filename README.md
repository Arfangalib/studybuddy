# StudyBuddy

A full-stack task management web application for students, built with the MERN stack. Helps students organize their daily tasks with a clean UI, CRUD operations, and a daily motivation/advice feature powered by an external API.

---

## Features

- **Task Management** — create, view, edit, and delete study tasks
- **Daily Advice** — motivational tips fetched from an external advice API via the backend
- **React Router Navigation** — multi-page SPA with Home, Tasks, Add Task, Edit Task, About, and custom 404 pages
- **MongoDB Atlas** — cloud-hosted database for persistent task storage
- **REST API** — Express backend with full CRUD routes and external API proxy route
- **Bootstrap UI** — clean, responsive interface

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React, React Router, Axios, Vite  |
| Backend    | Node.js, Express, Nodemon         |
| Database   | MongoDB Atlas, Mongoose           |
| Styling    | Bootstrap, CSS                    |
| Testing    | Thunder Client                    |

---

## Project Structure

```
studybuddy/
├── client/               # React frontend (Vite)
│   └── src/
│       ├── pages/        # HomePage, TasksPage, AddTaskPage, EditTaskPage, AboutPage, 404
│       ├── components/   # Navbar
│       └── services/     # taskService.js, adviceService.js (Axios calls)
├── server/               # Node/Express backend
│   ├── models/           # Mongoose Task model
│   ├── routes/           # taskRoutes.js, adviceRoutes.js
│   ├── data/             # tasks.json (seed data)
│   └── server.js         # Express app entry point
└── README.txt
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier works)

### Setup

```bash
# Clone the repo
git clone https://github.com/Arfangalib/studybuddy.git
cd studybuddy
```

**Backend:**
```bash
cd server
npm install
# Add your MongoDB Atlas URI to server/config/db.js
npm start
```
Backend runs on `http://localhost:5000`

**Frontend:**
```bash
cd client
npm install
npm run dev
```
Frontend runs on the Vite localhost link shown in terminal.

---

## API Routes

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | /api/tasks     | Get all tasks        |
| POST   | /api/tasks     | Create a new task    |
| PUT    | /api/tasks/:id | Update a task        |
| DELETE | /api/tasks/:id | Delete a task        |
| GET    | /api/advice    | Fetch daily advice   |

---

## Author

**Arfan Ali Galib** — CSIS Co-op Student @ Douglas College  
[LinkedIn](https://www.linkedin.com/in/arfan-ali-galib-82153a261/) · [GitHub](https://github.com/Arfangalib)
