# Real Estate Rental Platform

A modern and interactive full-stack real estate rental platform where users can **book properties**, **host their own listings**, and manage everything from a user-friendly dashboard. This project supports secure login, property hosting, booking with Razorpay integration, and includes an AI bot for support.

![Homepage](./client/screenshots/home1.png)
![Most Popular Searches](/client/screenshots/home2.png)
![Properties](/client/screenshots/home3.png)
![Assitant Bot](/client/screenshots/bot.png)

---

## Description

This application allows users to register/login, browse properties, and book them per night using an integrated Razorpay payment gateway. Users can also switch roles to become a host, list their own property with detailed features, and manage bookings. It also features a smart assistant bot to help users with common queries.

---

## Deployment

You can access the deployed versions of the backend and frontend below:

- **Frontend**: [https://rental-real-estate-frontend-4sjzicqjc.vercel.app](https://rental-real-estate-frontend.vercel.app)
- **Backend**: [https://real-estate-rental-backend.onrender.com](https://real-estate-rental-backend.onrender.com)

---

## Tech Stack

| **Category**         | **Technologies/Packages**                                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Backend**          | Express.js, Mongoose, bcryptjs, body-parser, cors, date-fns, dotenv, jsonwebtoken, multer, multer-gridfs-storage, nodemailer, react-date-range           |
| **Frontend**         | React, React Router, React Redux, Redux Toolkit, Redux Persist, React Date Range, React Beautiful DnD, React Icons, Material UI, Axios, Sass, Nodemailer |
| **Database**         | MongoDB                                                                                                                                                  |
| **Authentication**   | JSON Web Token (JWT), bcryptjs                                                                                                                           |
| **Payment**          | Razorpay                                                                                                                                                 |
| **Email**            | Nodemailer                                                                                                                                               |
| **Styling**          | TailwindCSS (via Material UI), Sass                                                                                                                      |
| **State Management** | Redux, Redux Toolkit, React-Redux                                                                                                                        |
| **Utilities**        | date-fns                                                                                                                                                 |
| **Build Tools**      | Webpack, React Scripts                                                                                                                                   |
| **Other**            | CORS (Cross-Origin Resource Sharing), Body-parser for request parsing                                                                                    |

---

## Features

- **User Authentication** (Login/Register)
- **View Property Listings**
- **Become a Host**
- **Define and Host Your Own Property**
- **Book Properties by Night**
- **Razorpay Payment Integration**
- **AI Chatbot for Assistance**
- **Dashboard to View Hosted & Booked Properties**

---

## Folder Structure

```
Rental_Real-Estate/
├── client/                        # Frontend (React.js)
│   ├── build/                    # Production build (created after build)
│   ├── node_modules/
│   ├── public/                   # Static assets
│   ├── src/                      # Source code
│   │   └── ...                   # React components, pages, etc.
│   ├── .firebaserc               # Firebase config
│   ├── firebase.json             # Firebase settings
│   ├── package.json              # Frontend dependencies and scripts
│   └── package-lock.json
│
├── server/                       # Backend (Node.js + Express)
│   ├── models/                   # Mongoose models
│   ├── routes/                   # API routes
│   ├── utils/                    # Utility functions
│   ├── public/                   # Backend static files (if any)
│   ├── node_modules/
│   ├── index.js                  # Entry point
│   ├── .env                      # Environment variables
│   ├── .gitignore
│   ├── package.json              # Backend dependencies and scripts
│   └── package-lock.json
│
└── README.md                     # Project documentation
```

---

## Workflow

1. **User Onboarding**:

   - User signs up/logs in using JWT authentication.

2. **Property Browsing**:

   - Browse through available properties with filters.

3. **Hosting a Property**:

   - Become a host and list a property with all relevant info.

4. **Booking a Property**:

   - Select dates and proceed with Razorpay payment.

5. **Dashboard Access**:

   - View hosted properties and current/past bookings.

6. **Bot Interaction**:
   - Chatbot assists with FAQs and navigation.

---

## Installation

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

> Set up `.env` file in backend for environment variables like API URLs, Razorpay key, MongoDB URI, etc.

---

## Future Improvements

- Property reviews and ratings
- Map integration (Google Maps)
