# 💻 Rajeev Nayan | Java Backend Engineer & System Architect

<p align="center">
  <a href="https://rajeevnayan.in">
    <img src="https://img.shields.io/badge/Live%20Demo-rajeevnayan.in-0052FF?style=for-the-badge&logo=react&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/imrajeevnayan">
    <img src="https://img.shields.io/badge/GitHub-imrajeevnayan-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/imrajeevnayan">
    <img src="https://img.shields.io/badge/LinkedIn-imrajeevnayan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

This is the source code for the official software engineering portfolio of **Rajeev Nayan**. The platform is built using modern web standards (TanStack Start, React 19, Tailwind CSS v4, and Nitro Engine) to showcase production-grade backend engineering expertise, live GitHub metrics, interactive architecture models, and AI integration.

---

## ✨ Primary Features

### 📡 1. Live System Status Ticker & GitHub Dashboard
- Connects directly to the GitHub REST API to fetch live repository metrics, commit histories, and programming statistics.
- Dynamically displays up-to-date coding activity to showcase continuous shipping.

### 🤖 2. RAG-Powered AI Chat Companion
- An integrated AI assistant powered by a Retrieval-Augmented Generation (RAG) system.
- Allows visitors to query Rajeev's experience, technologies, and projects, fetching semantic context directly from a knowledge store.

### 📟 3. Interactive Developer Terminal
- A retro-futuristic terminal command line interface that parses custom inputs (e.g., `help`, `projects`, `clear`, `contact`).
- Fully interactive and optimized for developer aesthetics.

### 📐 4. Interactive System Architecture Visualizer
- An interactive component explaining backend architecture designs (such as distributed load balancers, caching layers, and microservices) built inside React.

### ♿ 5. SEO & Accessibility Oriented
- Native semantic markup with high-contrast UI mode, screen-reader optimizations, keyboard shortcuts, and verified web-vitals tracking.

---

## 🛠️ Technology Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 SSR framework)
- **Router & Queries:** TanStack Router & React Query
- **Styling:** Tailwind CSS v4 + Framer Motion
- **Database / API Client:** Supabase Integration
- **Vercel Ecosystem Integrations:**
  - Vercel Web Analytics (`@vercel/analytics`)
  - Vercel Web Speed Insights (`@vercel/speed-insights`)
- **Server Bundling:** [Nitro Server Engine](https://nitro.unjs.io/) (configured with Vite and `@vitejs/plugin-react`)

---

## 🚀 Step-by-Step Setup Guide

Follow these steps to set up and run the codebase on your local machine:

### 1. Clone the Codebase
```bash
git clone https://github.com/imrajeevnayan/rajeevnayan.git
cd rajeevnayan
```

### 2. Install Project Dependencies
Ensure you have **Node.js (v18+)** installed. Run:
```bash
npm install
```

### 3. Setup Configuration Variables
Create a `.env` file in the root directory and define the required backend integration variables:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run in Development Mode
Start the Vite local development server:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser. Changes in the editor will automatically update the page via HMR.

---

## 📦 Building & Testing for Production

### Build Command
Compile the application for production:
```bash
npm run build
```
This optimizes and compiles:
- The **Client-side bundle** inside the `dist/client/` directory.
- The **Server-side functions** inside the `dist/server/` directory.

### Preview Local Production
To test the production build locally before shipping:
```bash
npm run preview
```

---

## ☁️ Deployment Guide

### Option 1: Automatic Git Deployments via Vercel (Recommended)
This codebase is fully preconfigured for Vercel using the Vite Nitro builder:
1. Go to [Vercel](https://vercel.com) and sign in.
2. Click **Add New Project** and import the `imrajeevnayan/rajeevnayan` GitHub repository.
3. The framework will automatically be detected as a custom Nitro/SSR build.
4. Set the **Build Command** to `npm run build` and **Output Directory** to `.output/public`.
5. Every push to your `main` branch will now automatically build and deploy.

### Option 2: Deployment via Cloudflare Pages
To build and deploy directly to Cloudflare Pages:
```bash
npx wrangler pages deploy .output/public
```
