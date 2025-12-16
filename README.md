# 📝 Task Manager Web App

A simple **Task Manager** web application built using the **MERN stack**.
Users can **add**, **view**, and **delete** tasks.

---

## 🚀 Tech Stack

* **Frontend:** React + Tailwind CSS
* **Backend:** Node.js + Express.js
* **Database:** MongoDB Atlas
* **Deployment:**

  * Frontend → Vercel
  * Backend → Render

---

## 📂 Project Structure

```
Task-Manager-Web-App/
 ├─ backend/
 └─ frontend/
```

---

## ⚙️ Setup Instructions (Local Development)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Task-Manager-Web-App.git
cd Task-Manager-Web-App
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

Run backend:

```bash
npm start
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file inside `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

Base URL:

```
/api
```

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/api/tasks`     | Get all tasks  |
| POST   | `/api/tasks`     | Add a new task |
| DELETE | `/api/tasks/:id` | Delete a task  |

---

## 🌍 Deployment Details

### Backend (Render)

* Backend deployed on **Render**
* Uses **HTTPS**
* Environment variables added on Render dashboard:

  * `MONGO_URI`
  * `NODE_ENV`

Live Backend URL:

```
https://task-manager-web-app-2.onrender.com
```

Health check:

```
https://task-manager-web-app-2.onrender.com/api/tasks
```

---

### Frontend (Vercel)

* Frontend deployed on **Vercel**
* Environment variable added on Vercel:

```env
VITE_API_URL=https://task-manager-web-app-2.onrender.com/api
```

Live Frontend URL:

```
https://task-manager-web-app-flame.vercel.app
```

---

## ✅ Features

* Add tasks
* View task list
* Delete tasks
* Responsive UI using Tailwind CSS
* Fully deployed (Frontend + Backend)

---

## 🧠 Notes

* `.env` files are not pushed to GitHub
* Backend uses REST APIs
* Simple and beginner-friendly project

