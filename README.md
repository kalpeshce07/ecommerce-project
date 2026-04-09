# 🛒 E-Commerce Full Stack Application

## 📌 Project Overview

This is a full-stack E-Commerce web application built using **React.js** for the frontend and **ASP.NET Core Web API** for the backend.

The application allows users to browse products, manage cart, place orders, and authenticate securely using JWT.

---

## 🚀 Features

### 👤 User Features

* User Registration & Login
* JWT Authentication
* View Products
* Add to Cart
* Increase / Decrease Quantity
* Place Orders
* View Order History

### 🔐 Admin Features

* Role-Based Authorization
* Add / Update / Delete Products

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Context API (State Management)
* React Router
* Fetch API

### Backend

* ASP.NET Core Web API
* Entity Framework Core
* SQL Server
* JWT Authentication
* Refresh Token

---

## 🔐 Authentication & Security

* JWT-based authentication
* Password hashing using ASP.NET Identity
* Role-based authorization (Admin/User)
* Protected API endpoints

---

## 📁 Project Structure

```
ecommerce-project/
│
├── frontend/        # React Application
│
├── backend/         # ASP.NET Core API
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

1. Open backend in Visual Studio
2. Update connection string in:

```
appsettings.json
```

3. Run migrations:

```
Update-Database
```

4. Run the API

---

### 🔹 Frontend Setup

1. Navigate to frontend folder:

```
cd frontend
```

2. Install dependencies:

```
npm install
```

3. Run application:

```
npm run dev
```

---

## 🌐 API Endpoints (Sample)

* `POST /api/auth/register`
* `POST /api/auth/login`
* `GET /api/products`
* `POST /api/orders`

---

## 📸 Screenshots

(Add screenshots here later)

---

## 🎯 Future Improvements

* Payment Gateway Integration
* Product Search & Filters
* UI Enhancement
* Deployment (Azure / Docker)

---

## 👨‍💻 Author

**Kalpesh Prajapati**

---

## ⭐ GitHub Repository

👉 https://github.com/kalpeshce07/ecommerce-project
