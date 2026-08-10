# Rajeev Nayan | Senior Java Backend Engineer & System Architect Portfolio

A modern, high-performance developer portfolio website built using TanStack Start, React, Tailwind CSS v4, and Framer Motion.

Live at: [rajeevnayan.in](https://rajeevnayan.in)

---

## 🚀 Features
- **Interactive System Visualizer:** Live interactive diagram explaining backend architecture patterns.
- **GitHub Integration:** Real-time metrics dashboard populated via GitHub REST API queries.
- **Problem Solving Tracker:** Highlighting expertise in LeetCode and GeeksforGeeks profiles.
- **AI-Powered Interactive Chat:** A smart assistant allowing visitors to query Rajeev's professional experience and skills directly.
- **Interactive Developer Terminal:** Retro-inspired developer terminal supporting customizable commands.
- **SEO & Accessibility Optimized:** Formatted with structured schema markup, SEO validation workflow, screen-reader accessibility controls, and keyboard navigation.

---

## 💻 Step-by-Step Setup & Development Guide

Follow these steps to set up the project locally on your machine, run it in development mode, build it for production, and deploy it.

### Step 1: Clone the Repository
Clone the repository to your local system and navigate to the project directory:
```bash
git clone https://github.com/imrajeevnayan/rajeevnayan.git
cd rajeevnayan
```

### Step 2: Install Node.js (If not already installed)
Make sure you have **Node.js** (v18 or higher) installed on your machine. You can verify your version by running:
```bash
node -v
```

### Step 3: Install Dependencies
Install all the required package dependencies using `npm`:
```bash
npm install
```

### Step 4: Configure Environment Variables
1. Create a file named `.env` in the root of the project directory.
2. Add your environment credentials (such as Supabase or any necessary API tokens). Example format:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Step 5: Run the Development Server
Start the local server in development mode. The app will auto-reload when you modify any source files:
```bash
npm run dev
```
Once started, open your browser and navigate to:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📦 Building for Production

To compile a minified, production-ready build of your portfolio:

### Step 1: Run the Build Command
```bash
npm run build
```
This command compiles:
- The **Client-side assets** into the `dist/client` directory.
- The **Server-side (SSR) environment** into the `dist/server` directory.

### Step 2: Preview the Production Build Locally
You can run a local preview of the compiled production application:
```bash
npm run preview
```

---

## ☁️ Deployment Instructions

The project is built using **Nitro Server** with support for serverless platforms.

### Option A: Deployment via GitHub Integrations (Recommended)
Because the codebase is pushed to your GitHub repository `imrajeevnayan/rajeevnayan`:
1. Connect your repository to **Vercel**, **Netlify**, or **Cloudflare Pages**.
2. Set the build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `.output/public` or `dist/client` (depending on the platform configuration).
3. The platform will automatically trigger a build and deploy every time you push to the `main` branch.

### Option B: Deploying directly to Cloudflare Pages (CLI)
Since the production build supports the Cloudflare Pages preset:
```bash
npx wrangler pages deploy .output/public
```
*(Requires logging into your Cloudflare account via the CLI).*
