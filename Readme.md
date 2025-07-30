# 🛒 Product Inventory Management App

This is a full-stack MERN project I built using **Vite + Tailwind CSS** on the frontend and **Node.js + Express + MongoDB** on the backend. It allows users to sign up, log in, and manage a list of products with categories.

---

## 🔧 Features

- JWT-based user authentication (Signup & Login)
- Add, edit, delete, and view products
- Filter products by:
  - Name
  - Category
  - In-stock only
- Add and view product categories
- Protected routes using JWT
- Clean UI using Tailwind CSS

---

## 🖥️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

---

## Endpoints Description 
Auth
Endpoint	Description
POST	/auth/signup	Register a new user (name, email, password)
POST	/auth/login	Login and get JWT (email, password)


APIs Description 
POST	/products	Add new product (name, price, categoryId, inStock)
GET	/products	Get all products, with filters: ?search=name&category=catId&inStock=true
GET	/products/:id	Get one product by ID
PUT	/products/:id	Update product
DELETE	/products/:id	Delete product
---
## 🚀 How to Run Locally

### Frontend
```bash
cd frontend
npm install
npm run dev
```
### Backend

```bash
cd Backend
npm install
nodemon index.js
"# Inventory_-App" 
```
