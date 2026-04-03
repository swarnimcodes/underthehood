# AGENTS.md - Developer Guidelines for This Repository

## Project Overview

This is a simple frontend-only web project - a single HTML file (`index.html`) containing:
- Interactive engine share graph visualization using vis.js
- Theme toggle (light/dark)
- Search functionality
- No build system required

## Tech Stack
- HTML5, CSS3, Vanilla JavaScript
- vis.js (via CDN: https://unpkg.com/vis-network/standalone/umd/vis-network.min.js)
- Google Fonts (Playfair Display, DM Sans)

---

## Build / Development Commands

### Running Locally
```bash
# Open index.html in browser
xdg-open index.html

# Or start a simple HTTP server
python3 -m http.server 8080
# Then visit http://localhost:8080
```

### No Build/Lint/Test Commands
This project has no build process, linters, or test frameworks. The code runs directly in the browser.

---

## Code Style Guidelines

### General Principles
- Keep code minimal and simple - this is a frontend-only single-file project
- Use semantic HTML and modern CSS (CSS variables for theming)
- Vanilla JavaScript only - no frameworks

### HTML Structure
- Use semantic tags
- Keep CSS in `<style>` block in `<head>`
- Keep JS in `<script>` block at end of `<body>`

### CSS Guidelines
- Use CSS custom properties (variables) for theming
- Use `:root` for defining theme colors
- Use `[data-theme="dark"]` selector for dark mode overrides
- Follow the existing pattern:
  ```css
  :root {
      --bg: #f5f2eb;
      --text: #2d2d2d;
  }
  [data-theme="dark"] {
      --bg: #0d0d0d;
      --text: #e8e8e8;
  }
  ```

### JavaScript Conventions
- Use `const` by default, `let` only when mutation needed
- Use semicolons after statements
- Use function declarations or function expressions (avoid arrow functions for clarity)
- Use template literals for string interpolation
- Use `===` for strict equality
- Comment complex logic briefly

### Naming Conventions
- Variables/functions: `camelCase` (e.g., `searchIndex`, `buildGraph`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `fuelColors`)
- IDs: `kebab-case` (e.g., `searchInput`, `infoPanel`)
- CSS classes: `kebab-case` (e.g., `.search-modal`, `.info-panel`)

### Data Structures
- Engines and cars stored as arrays of objects
- Each engine object: `{ id, name, displacement, power, fuel, family, cylinders, code, yearRange, notes }`
- Each car object: `{ id, name, brand, engines: [] }`
- Use `vis.DataSet` for nodes and edges (vis.js requirement)

### Error Handling
- Use optional chaining (`?.`) when accessing nested properties
- Use nullish coalescing (`??`) for default values
- Wrap data access in conditionals when structure is uncertain

### Theming
- Always use CSS variables, not hardcoded colors
- Test both light and dark themes
- Ensure text remains readable in both modes

### Search Feature
- Build search index on page load
- Search should match names AND codenames
- Support keyboard navigation (↑↓ Enter Esc)
- Use `/` key to open search from anywhere

---

## Common Tasks

### Adding New Cars/Engines
1. Add engine to `engines` array with unique `id`
2. Add car to `cars` array, linking to engine `id`s
3. Colors auto-assign based on `fuel` property (diesel/petrol/hybrid)

### Adding New Features
1. Add CSS to `<style>` block
2. Add HTML elements before `<script>` 
3. Add JavaScript at end of `<script>`
4. Test both themes

### Modifying Node Visuals
- Engines: `shape: "hexagon"`, size ~26px, fuel-colored
- Cars: `shape: "dot"`, size ~20px, gray
- Update `fuelColors` object for new fuel types

---

## File to Edit

Only one file needs editing for most changes:
- `/home/swarnim/projects/personal/underthehood/index.html`

---

## Notes for Agents

- This is a simple project - avoid over-engineering solutions
- Commit frequently with clear messages
- Test theme toggle after CSS changes
- Test search after adding new data
- Verify edge highlighting works when clicking nodes
