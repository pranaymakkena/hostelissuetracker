# 🏨 Smart Hostel Issue Tracking System

A full-stack web platform that enables students to report hostel issues and allows management to track, assign, and resolve them efficiently.

Built using **Django (Backend)** + **React (Frontend)**.

---

## 🚀 Live Deployment

Frontend: Vercel  
Backend: Render  

Frontend → https://smashhosteltrack.vercel.app  
Backend → https://smashhosteltrack.onrender.com  

---

## 📌 Problem Statement

This project solves the **Smart Hostel Issue Tracking System** problem:

Replace informal complaint methods (WhatsApp, paper registers, verbal complaints) with a structured digital platform that:

✔ Tracks issues  
✔ Improves transparency  
✔ Reduces resolution time  
✔ Provides accountability  

---

## ✨ Features

### 👨‍🎓 Student
- Register account
- Report issues with:
  - Category
  - Priority
  - Description
  - Image upload
- Auto hostel/block/room tagging
- View personal issue status

### 🛠️ Management
- View all reported issues
- Assign caretaker/staff
- Update status:
  - Reported
  - Assigned
  - In Progress
  - Resolved
  - Closed
- Track all complaints centrally

---

## 🏗️ Tech Stack

### Frontend
- React
- Axios
- React Router

### Backend
- Django
- Django REST Framework
- SQLite (local) / PostgreSQL (production)

### Deployment
- Frontend → Vercel
- Backend → Render

---

## 📁 Project Structure

smart-hostel-system/  
│  
├── backend/  
│ ├── hostel/  
│ ├── users/  
│ ├── issues/  
│ ├── manage.py  
│ ├── requirements.txt  
│ └── Procfile  
│  
├── frontend/  
│ ├── src/  
│ ├── public/  
│ ├── package.json  
│ └── .env  
│  
└── README.md  

---

## ⚙️ Local Setup

# Backend

~~~bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
~~~
Backend runs at:
~~~bash
http://127.0.0.1:8000
~~~
Frontend
~~~bash
cd frontend
npm install
npm start
~~~
Frontend runs at:
~~~bash
http://localhost:3000
~~~

🔗 API Endpoints
Users
POST /api/users/register/

Issues
POST /api/issues/create/
GET /api/issues/list/
PUT /api/issues/update/<id>/

🌍 Deployment Guide
Backend (Render)
Push backend folder to GitHub

Create Web Service on Render

Build Command:

~~~bash
pip install -r requirements.txt
~~~
Start Command:
~~~bash
gunicorn hostel.wsgi
~~~
Frontend (Vercel)
Push frontend folder

Import repo in Vercel

Deploy

📊 Status Workflow
~~~bash
Reported → Assigned → In Progress → Resolved → Closed
~~~

🎯 Learning Outcomes
Full-stack development

REST API design

Role-based access control

Image uploads

Cloud deployment

Frontend-backend integration