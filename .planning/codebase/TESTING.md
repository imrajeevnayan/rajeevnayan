# Testing Strategy

## Current State
- **Automated Tests**: No unit, integration, or E2E tests currently exist (Vitest, Jest, Cypress are absent from `package.json`).
- **Verifications**: Relies currently on manual testing via `npm run dev` and manual Lighthouse audits.

## Proposed Future Coverage
- **Unit Testing**: Vitest for utility logic (e.g., custom hooks).
- **Component Testing**: Playwright or React Testing Library for interactive elements (e.g., Magnetic buttons).
- **E2E Testing**: Visual regression testing using Playwright to ensure complex CSS/Animations don't break across devices.
