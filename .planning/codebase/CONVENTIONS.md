# Development Conventions

## Code Style
- **TypeScript**: Mandatory use for all logic and props definition.
- **Functional Components**: All React components are built as arrow functions with proper typing.
- **Clean Code**: Heavy focus on descriptive variable names and modular data flow (e.g., arrays for mapping over components like `experiences`).

## Styling Conventions
- **Tailwind Utility First**: Styling is predominantly handled via utility classes.
- **Standard UI Classes**: Usage of `glass-panel` for consistent glassmorphism effects.
- **Responsive-First**: Mobile styling is handled using Tailwind's breakpoint prefixes (`md:`, `lg:`).

## Performance Standards
- **Lazy Loading**: Non-hero components MUST be lazy-loaded.
- **Asset Optimization**: High-priority assets (like the Hero image) are stored in `public/` and preloaded.
- **Interaction Throttling**: Use systems like `gsap.quickSetter` for high-frequency events.
