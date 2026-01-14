Product Explorer Dashboard

A modern, responsive frontend application built with Next.js (App Router), TypeScript, and Tailwind CSS.
This project demonstrates clean component architecture, client-side state management, and a polished UI with dark/light theme support.

📌 Overview

The Product Explorer Dashboard allows users to browse products, view detailed product pages, manage favorites, and switch between light and dark themes. The application is designed to resemble a small, production-ready e-commerce frontend.

✨ Features

⚡ Built with Next.js App Router

🧩 Modular and reusable component architecture

🎨 Tailwind CSS with Dark / Light theme support

🌙 Theme toggle using next-themes

🔍 Product listing with pagination

📄 Product detail page

❤️ Favorites management (add / remove / clear)

📱 Fully responsive layout

🧼 Clean, maintainable, and readable codebase

🛠️ Tech Stack

Framework: Next.js 14+

Language: TypeScript

Styling: Tailwind CSS

Theme Management: next-themes

Routing: App Router

State Management: React hooks (useState, useEffect, useContext)

Icons: Lucide / Heroicons (if applicable)

📂 Project Structure
├── app/                 # App Router pages and layouts
│   ├── page.tsx         # Product listing page
│   ├── product/[id]/    # Product detail page
│   ├── favorites/       # Favorites page
│   └── layout.tsx       # Root layout
│
├── components/          # Reusable UI components
│   ├── ProductCard.tsx
│   ├── Header.tsx
│   ├── ThemeToggle.tsx
│   └── Pagination.tsx
│
├── public/              # Static assets
├── styles/              # Global styles (if any)
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── README.md

🚀 Getting Started
Prerequisites

Node.js 18+

npm or yarn

Installation
npm install


or

yarn install

Run the Development Server
npm run dev


Open your browser and navigate to:

http://localhost:3000

🧪 Assignment Objectives Covered

✅ Component-based architecture

✅ Client-side state handling

✅ Navigation with App Router

✅ Responsive UI

✅ Clean and maintainable code

✅ Theme support (dark / light)

✅ Realistic product dashboard experience

📸 Screens & Pages

Product Listing Page
<img width="1818" height="1073" alt="image" src="https://github.com/user-attachments/assets/52b3ca75-75c3-4ec6-94a2-d52d3a16c7a8" />

<img width="1818" height="1073" alt="image" src="https://github.com/user-attachments/assets/f46215ae-1c76-4bce-a502-3eff4c8c2661" />

Product Detail Page
<img width="1861" height="1101" alt="image" src="https://github.com/user-attachments/assets/18546b9c-fc97-4869-90cc-2a116b5cbf59" />

Favorites Page
<img width="1751" height="931" alt="image" src="https://github.com/user-attachments/assets/4260c134-efed-489f-8830-7876dfd14c4b" />

Dark / Light Theme Toggle

🔮 Possible Enhancements

API integration with a real backend

Server-side data fetching

Sorting and advanced filtering

Skeleton loaders

Unit and integration tests

Accessibility (ARIA improvements)

📄 License

This project is for educational and evaluation purposes.
