# NextShop - Mobile E-Commerce Website

[Live Site](https://nextshop-eight-rho.vercel.app/)

NextShop is a simple e-commerce web application built with **Next.js 16 (App Router)**. This project focuses on selling mobile phones online, providing users with product browsing, detailed views, and optional authenticated item management.

---

## **Table of Contents**

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Authentication](#authentication)  
- [Pages / Routes](#pages--routes)  
- [Technologies Used](#technologies-used)  
- [Setup & Installation](#setup--installation)  
- [Login Credentials](#login-credentials)  

---

## **Project Overview**

NextShop is designed as a simple mobile e-commerce platform.  
- Public pages include landing, item list, and item detail pages.  
- Optional protected pages allow logged-in users to add new items via a form.  
- Authentication is implemented using **mock login** with cookies.  
- The app communicates with an **Express.js API / JSON** to manage product data.  

The landing page contains **7 sections**:

1. Hero Section (banner / tagline)  
2. Features Section  
3. About Section  
4. Services Section  
5. Testimonials / Reviews Section  
6. Call-to-Action Section  
7. Contact / Footer Section  

Additional sections include a **Brands / Partners Section** to highlight trusted mobile brands.

---

## **Features**

- Public landing page with 7+ sections  
- Responsive **Navbar** with navigation to Login and Items pages  
- Mock login authentication with cookie-based session  
- Protected route: Add Item (only for logged-in users)  
- Item list page fetching data from Express.js server or JSON  
- Item details page showing full product info  
- Optional: Toast notifications on product creation  
- Responsive design using **TailwindCSS**  

---

## **Authentication**

- **Primary**: Mock login with hardcoded credentials  
- **Optional (Highly Recommended)**: Can integrate **NextAuth.js** for social login  
- Logged-in users can access the **Add Item** page  
- Non-authenticated users are redirected to **Login Page**  

---

## **Pages / Routes**

| Route | Description | Auth Required |
|-------|-------------|---------------|
| `/` | Landing Page | No |
| `/items` | Item List Page | No |
| `/items/[id]` | Item Details Page | No |
| `/login` | Login Page | No |
| `/add-items` | Add Item Form | Yes (protected) |
| `/about` | About Page | No |
| `/contact` | Contact Page | No |
| `/signup` | Signup Page (optional) | No |

---

## **Technologies Used**

- **Frontend**: Next.js 16 (App Router), React  
- **Backend**: Express.js API / JSON for products  
- **Styling**: TailwindCSS  
- **Notifications**: SweetAlert2 / react-toastify (optional)  
- **Authentication**: Cookie-based mock login (optional NextAuth.js for social login)  

---

## **Setup & Installation**

1. Clone the repository:

```bash
git clone : https://github.com/arzoo594/NextShop-Repo.git

