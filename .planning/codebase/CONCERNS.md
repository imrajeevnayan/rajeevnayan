# Engineering Concerns

## High Priority (Technical Debt)
- **Monolithic Components**: Components like `Projects.tsx` and `Hero.tsx` exceed 250+ lines. Logic should be extracted into custom hooks (e.g., `useProjects`).
- **Missing Tests**: Entire codebase lacks test coverage, making regressions likely during refactors.
- **Three.js Performance**: 3D elements can be CPU intensive on low-end mobile devices if several are active simultaneously.

## Architecture Risks
- **Asset Drift**: Images linked from Unsplash are external and could break or change, affecting site reliability.
- **Animation Complexity**: Heavy reliance on both GSAP and Framer Motion creates a large total bundle size specifically for animation libraries.

## Opportunity Areas
- **PWA Integration**: Converting to a Progressive Web App for offline support and faster subsequent loads.
- **Image Self-Hosting**: Moving Unsplash references to local optimized WebP formats for consistent availability.
