# 🏗️ Server (Backend)

Backend API for the **Role-Based Authentication System**, built using **Node.js, Express, and MongoDB Atlas**.  
This service handles user registration, login, JWT authentication, role-based access, and protected routes.

---

## 📁 Backend Repository

👉 **https://github.com/Sharanumesta/inbotiq-server**

---

## 🚀 Features

- Role-based authentication (**User / Admin**)  
- Secure password hashing using **bcryptjs**  
- JWT-based authentication with token expiration  
- Protected routes using middleware  
- MongoDB Atlas database  
- Modular folder structure (controllers, routes, middleware, models)  
- CORS enabled for frontend access  
- Environment-based configuration with dotenv  

---

## 🧰 Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB Atlas (Mongoose)**  
- **bcryptjs**  
- **jsonwebtoken**  
- **cors**  
- **dotenv**

---

## 📦 Installation & Setup

### 1️⃣ Clone the Backend Repo

```bash
git clone https://github.com/Sharanumesta/inbotiq-server
cd inbotiq-server
npm install
```
## 🔧 Environment Variables

Create a `.env` file at the root of the backend folder:
```
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```


## 🔗 API Resources

### 🧪 Postman API Collection  
Use this link to test backend routes:

https://alone7-8517.postman.co/workspace/Alone-Workspace~e9c75852-334e-4411-a7fd-4319c6f95992/collection/25239808-7feddbb9-b2f9-4af1-a4ab-3531468f779d?action=share&creator=25239808&active-environment=25239808-f4681c39-bfa0-4d7a-b10a-5680533bec3c

---

## 📡 Backend API (High-Level Overview)

| Method | Endpoint            | Description                  |
|--------|----------------------|------------------------------|
| POST   | /api/auth/signup     | Register a new user         |
| POST   | /api/auth/login      | Login and return JWT token  |
| GET    | /api/auth/me         | Fetch authenticated user    |

Protected endpoints require:
Authorization: Bearer <token>

---

## 📦 Installation & Setup

### Clone & Install Backend
```bash
git clone https://github.com/Sharanumesta/inbotiq-server
cd inbotiq-server
npm install
```
## 🖥 Development

Run locally:

    npm run dev

App runs at:

    http://localhost:8080

---
