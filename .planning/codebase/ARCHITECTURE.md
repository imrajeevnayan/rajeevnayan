# Project Architecture

## Patterns & Paradigms
- **Component-Driven Development**: UI is broken down into modular sections (Hero, About, Projects, etc.) located in `src/components`.
- **Hybrid Animation Strategy**:
  - **Framer Motion**: Used for declarative, scroll-triggered entrance animations (e.g., `whileInView`).
  - **GSAP**: Used for high-frequency, complex interactions like the custom cursor tracker and parallax effects.
  - **GSAP Context**: Utilized to manage memory and ensure proper cleanup of animations.

## Interaction Architecture
- **Magnetic Components**: Wrapped interactive elements that follow mouse proximity.
- **3D Layering**: Integration of Three.js R3F canvases as background or floating decorative elements.
- **Lazy Loading Strategy**: Non-critical sections (Experience, Skills, Projects, etc.) are lazy-loaded via React `Suspense` and `lazy()` to minimize initial bundle size and TTF (Time to First Print).

## State Management
- **Local React State**: Standard `useState` and `useEffect` for UI toggles (e.g., Dark Mode) and visibility states.
- **Theme Persistence**: Light/Dark mode state management in `App.tsx`.
