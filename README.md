# Rajeev Nayan | Senior Java Backend Engineer & System Architect Portfolio

A modern, high-performance developer portfolio website showcasing expertise in backend development, distributed systems, and system architecture.

Live at: [rajeevnayan.in](https://rajeevnayan.in)

## 🚀 Key Features

- **Interactive System Visualizer:** Live interactive diagram explaining backend architecture patterns.
- **GitHub Integration:** Real-time metrics dashboard populated via GitHub REST API queries.
- **Problem Solving Tracker:** Highlighting expertise in LeetCode and GeeksforGeeks profiles.
- **AI-Powered Interactive Chat:** A smart assistant allowing visitors to query Rajeev's professional experience and skills directly.
- **Interactive Developer Terminal:** Retro-inspired developer terminal supporting customizable commands.
- **SEO & Accessibility Optimized:** Formatted with structured schema markup, SEO validation workflow, screen-reader accessibility controls, and keyboard navigation.

## 🛠️ Technology Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (Full-stack React framework with SSR, streaming, and RPC capabilities)
- **State & Routing:** TanStack Router & React Query
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Runtime & Deployment:** Nitro Server built for serverless Cloudflare deployments.
- **Database/Backend integration:** Supabase client integration.
- **Animations:** Framer Motion

## 📦 Getting Started

### Prerequisites

You will need **Node.js** (v18+) and **npm** or **bun** installed.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/imrajeevnayan/rajeevnayan.git
   cd rajeevnayan
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add the required configurations (such as Supabase credentials).

### Development Server

Run the development server locally:
```bash
npm run dev
```

### Production Build

Build the project for production:
```bash
npm run build
```

The output build will be compiled into the `dist/` directory, optimized for deployment.
