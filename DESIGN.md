# Design System: Rajeev Nayan Portfolio
**Project ID:** rajeev-nayan-portfolio-v1

## 1. Visual Theme & Atmosphere
The design follows the official **Apple (España) E-commerce and Design System** guidelines. The aesthetic is **minimalist**, **airy**, **highly structured**, and **premium flat** (avoiding heavy shadows in favor of precise border hairlines). The layout adapts dynamically between a clean, bright canvas (light mode) and a high-contrast dark space (dark mode), supported by interactive constellation animation paths.

## 2. Color Palette & Roles

### Base System Colors
* **Primary Ink (#1D1D1F)**: The main text color in light mode; provides deep contrast and high readability.
* **Canvas Alternate Gray (#F5F5F7)**: Used for alternating section backgrounds and default container fills to differentiate modules.
* **Paper White (#FFFFFF)**: The canvas color for main pages and card backgrounds in light mode.
* **Cool Wash (#E8E8ED)**: Used for hover background states, active buttons, and subtle component borders.
* **Hairline Border (#D6D6D6)**: Standard divider line color for dividing lists and card boundaries.
* **Quiet Dot (#777779)**: Applied to subtext, inactive tab controls, and secondary indicators.

### Accent Palette
* **Electric Blue (#0071E3)**: The primary call-to-action (CTA) color, used for main buttons, highlights, and selection indicators.
* **Link Blue (#0066CC)**: Used exclusively for text links, inline buttons, and interactive navigation elements.
* **Ember Orange (#B64400)**: Warm badges, eyebrows, "New" indicators, and accent highlights.

---

## 3. Typography Rules
* **Header Typography (SF Pro Display / Inter)**:
  * Giant hero headers are rendered at **80–96px** on large screens (`text-5xl md:text-7xl`) with a tight letter spacing of **`-1.44px`** (`tracking-[-1.44px]`) and a bold weight of **700**.
  * Eyebrows are styled at **12px or 14px** in uppercase with monospace tracking.
* **Body Typography (SF Pro Text / Inter)**:
  * Standard body copy is scaled to **17px** with a **`-0.022em`** letter tracking and a comfortable line-height of **`1.47`** for maximum reading ease.
  * Captions and legal notes are set to **12px** SF Pro Text.

---

## 4. Component Stylings

* **Buttons (CTAs)**:
  * **Primary Buttons**: Pill-shaped with a complete border-radius of **980px** (`rounded-[980px]`). Background set to Electric Blue (`#0071E3`) with white text and active scale hover states.
  * **Secondary Buttons**: Transparent backgrounds, Hairline borders, and Link Blue (`#0066CC`) or Primary Ink text.
* **Cards / Panels**:
  * All container cards feature a large, premium roundness of **28px** (`rounded-[28px]`).
  * Cards are built with flat boundaries—no shadows are applied. Depth is communicated strictly via background contrast (`--bg-alternate` or `--surface-card`) and Hairline borders (`1px solid var(--border-main)`).
* **Inputs & Forms**:
  * Input fields use a **14px** border radius (`rounded-[14px]`) with a background matching the canvas color and a 1px border. Focus states transition smoothly to an Electric Blue border highlight.

---

## 5. Layout Principles
* **Frosted Navigation Bar**: A sticky header bar with a fixed height of **44px** and **72% frosted glass transparency** (`backdrop-blur-md bg-[var(--glass-bg)]`), utilizing miniature **12px** navigation labels.
* **Section Containers**: Main sections are restricted to a maximum width of **1200px** (`max-w-[1200px]`) centered horizontally with spacious desktop vertical paddings of **128px** (`py-32`) to allow the layout to breathe.
* **Grids & Spacing**: Grid cells are aligned with strict gaps (`gap-8` or `gap-12`) to align text baselines perfectly.
