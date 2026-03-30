# Project Structure

```text
e:/portfolio/rajeevnayan/
├── .planning/                  # Project planning and state (Generated)
│   └── codebase/               # Codebase mapping documents
├── public/                     # Static unhashed assets (LCP critical images)
├── src/
│   ├── assets/                 # Processed assets (profile image, favicons)
│   ├── components/             # Page section components
│   │   ├── common/             # Reusable UI primitives (3D, Magnetic, Tilt)
│   │   ├── About.tsx           # Storytelling section
│   │   ├── App.tsx             # Main layout, routing, and shared state
│   │   ├── Contact.tsx         # Forms and integrations
│   │   ├── Hero.tsx            # LCP-critical landing section
│   │   └── ...                 # Other section components
│   ├── main.tsx                # Entry point
│   ├── index.css               # Tailwind & Global design tokens
│   └── vite-env.d.ts           # TS definitions
├── dist/                       # Output build (Gitignored)
├── node_modules/               # Dependencies (Gitignored)
├── tailwind.config.js          # Design system configuration
├── vite.config.ts              # Build & optimization config
└── package.json                # Project metadata and dependencies
```
