
<div align="center">
  <h1 align="center">Rajeev Nayan | Software Developer Portfolio</h1>
  <p align="center">
     Creating interactive, scalable, and performance-optimized web experiences.
  </p>

  <p align="center">
    <a href="https://rajeevnayan.in/" target="_blank">
      <img src="https://img.shields.io/badge/Live%20Site-Visit%20Now-2ea44f?style=for-the-badge&logo=vercel" alt="Live Site" />
    </a>
    <a href="https://github.com/imrajeevnayan">
      <img src="https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/imrajeevnayan/">
      <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn" />
    </a>
    <a href="mailto:imrajeevnayan@gmail.com">
      <img src="https://img.shields.io/badge/Email-Contact%20Me-D14836?style=for-the-badge&logo=gmail" alt="Email" />
    </a>
  </p>

  <br />
  <img src="assets/preview.png" alt="Project Preview" width="100%" />
</div>

---

## 🚀 Overview

Welcome to my personal portfolio repository! This project is a state-of-the-art representation of my skills, experience, and projects as a **Full Stack Developer**. It is built with an extreme focus on **performance**, **responsiveness**, and delivering a **jaw-dropping 3D user experience**.

### 🌟 Recent Architecture Upgrades (3D Experiences)
- **High Performance 3D rendering:** Implemented via *React Three Fiber (WebGL)* and hardware-accelerated CSS 3D transforms with *Framer Motion*.
- **Zero Render Blocking:** Heavy 3D mesh instances are aggressively **Lazy-Loaded** (`<Suspense>`) ensuring the website paints text and critical HTML instantly on mobile or low-end devices.
- **Accessible & Subtle Elements:** The 3D viewports are assigned `z-index` background positioning and configured as `pointer-events-none` so visitors can effortlessly interact with the textual content, copy elements, and use screen readers.

## ✨ Key Features

- **🪄 Stunning 3D Experiences**: 
  - **Interactive 3D Skill Sphere**: A Fibonacci distribution globe of tech stack icons that dynamically rotates based on mouse velocity.
  - **3D Coverflow Project Carousel**: Immersive 3D project showcase utilizing deep perspective transforms.
  - **3D Parallax Scene & Particles**: A scroll-tied React Three Fiber particle instance and true 3D floating Hero text that reacts identically to depth-parallax scrolling.
- **🎨 Modern UI/UX**: Built with **React** and **Tailwind CSS** for a sleek, glassmorphic, and responsive design.
- **🌗 Dark Mode**: Fully integrated dark mode with a toggle switch, persisting user preference.
- **⚡ High Performance**: Optimized with **Code Splitting (React.lazy)** and **Lazy Loading** for images to ensure fast load times.
- **📱 Fully Responsive**: Mobile-first approach ensuring a seamless experience across all devices (Mobile, Tablet, Desktop).
- **🎞️ Smooth Animations**: Interactive elements powered by **Framer Motion** and **Three.js** for an engaging user experience.
- **📄 Comprehensive Sections**:
  - **Hero**: Professional introduction with gorgeous WebGL particles.
  - **About**: Personal background and education.
  - **Experience**: detailed professional timeline.
  - **Skills**: Interactive 3D tag cloud of technical skills.
  - **Projects**: 3D Carousel showcase of key projects with GitHub and Live demo links.
  - **Certifications**: Professional achievements and badges.
  - **Contact**: Functional contact form and details.

---

## 🛠️ Tech Stack

This project leverages the latest web technologies to deliver a top-tier 3D experience:

| Category | Technologies |
|----------|-------------|
| **Frontend** | [React 18](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) |
| **3D Rendering** | [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) |
| **Build Tool** | [Vite](https://vitejs.dev/) (Super fast build times) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (Utility-first framework) |
| **Icons** | [Lucide React](https://lucide.dev/) (Beautiful & consistent icons) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) (Production-ready animations) |
| **Deployment** | [Netlify](https://netlify.com/) / [GitHub Pages](https://pages.github.com/) |

---

## � Project Structure

A quick look at the top-level files and directories you'll see in this project.

```
rajeevnayan/
├── public/              # Static assets (favicons, robots.txt, etc.)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx          # Main application component with Suspense & Routing
│   ├── index.css        # Global styles & Tailwind directives
│   └── main.tsx         # Entry point
├── .gitignore           # Git ignore rules
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

---

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/imrajeevnayan/rajeevnayan.git
   cd rajeevnayan
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

---

## 🚀 Deployment

To deploy this project to production:

1. **Build the project**
   ```bash
   npm run build
   ```
   This will create a `dist` folder with optimized static assets.

2. **Deploy**
   You can deploy the contents of the `dist` folder to any static hosting provider like Netlify, Vercel, or GitHub Pages.

---

## � Contact

I am currently open to **Full Stack Development** roles. Feel free to reach out!

- **Email**: [imrajeevnayan@gmail.com](mailto:imrajeevnayan@gmail.com)
- **LinkedIn**: [linkedin.com/in/imrajeevnayan](https://www.linkedin.com/in/imrajeevnayan/)
- **GitHub**: [github.com/imrajeevnayan](https://github.com/imrajeevnayan)

---

<p align="center">
  Made with ❤️ by <strong>Rajeev Nayan</strong>
</p>
