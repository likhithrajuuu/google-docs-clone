# 📝 Google Docs Clone

[![License: MIT](https://img.shields.io/badge/License-MIT-green)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-teal?logo=tailwind-css)](https://tailwindcss.com/)
[![Convex](https://img.shields.io/badge/Convex-purple?logo=vercel)](https://www.convex.dev/)

A **real-time collaborative document editor** inspired by Google Docs — built using **Next.js**, **React.js**, **Convex**, **Tiptap**, and **Shadcn/UI**.  
This project allows multiple users to **create, edit, and share documents** with seamless live synchronization, autosave, and a modern, responsive interface.

---

## 🌟 Demo

Check out the live demo here: [Live Demo](https://your-demo-link.com)  

![Demo GIF](./assets/demo.gif)  
*Collaborative editing and real-time updates in action*

---

## ✅ Features

- ⚡ **Real-time Collaboration**: Multiple users can edit documents simultaneously  
- 💾 **Auto-Save**: Edits are saved instantly using Convex’s reactive backend  
- 🖋️ **Rich Text Editing**: Powered by Tiptap (ProseMirror-based editor)  
- 🧭 **Modern UI**: Designed using Shadcn/UI and Tailwind CSS  
- 🔐 **Authentication & Document Sharing**: Secure access control  
- 📂 **Document Management**: Create, rename, and organize your documents effortlessly  
- 📄 **Templates**: Start quickly with pre-built templates  

---

## 🧩 Tech Stack

| Category       | Technology |
|----------------|------------|
| **Frontend**   | Next.js, React.js, TypeScript |
| **Backend**    | Convex (Real-time backend + Database) |
| **Editor**     | Tiptap |
| **UI Library** | Shadcn/UI |
| **Styling**    | Tailwind CSS |
| **Icons**      | Lucide React |

---

## 🏗️ Installation

Follow these steps to set up the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/google-docs-clone.git

# 2. Navigate into the project directory
cd google-docs-clone

# 3. Install dependencies
npm install

# 4. Set up Convex
npx convex dev

# 5. Run the development server
npm run dev
