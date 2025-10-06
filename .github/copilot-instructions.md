# Museo Histórico Guácaras - AI Coding Instructions

## Architecture Overview

This is a static HTML museum website with a modular template structure showcasing the history of Santa Ana de los Guácaras through 4 thematic rooms.

### Key Components
- **Main entry**: `index.html` - Landing page with hero section and room gallery
- **Room pages**: `sala1.html` through `sala4.html` - Individual exhibition rooms
- **Shared templates**: `templates/header.html` and `templates/footer.html` - Loaded via fetch API
- **Asset structure**: `theme_front/` contains CSS, JS, images, and vendor libraries

## Template System

### Header/Footer Loading Pattern
All pages use the same JavaScript pattern to load shared templates:
```javascript
fetch("templates/header.html")
  .then(res => res.text())
  .then(html => document.getElementById("header").innerHTML = html);
```
- Always include `<div id="header"></div>` and `<div id="footer"></div>` in new pages
- Templates use relative paths from the root directory

### Navigation Structure  
- Header navigation uses `./` prefix for links (`./index.html`, `./index.html#salas`)
- Brand logo links to external site: `http://www.santaanadelosguacaras.gob.ar/museo`
- Fixed navbar with Bootstrap classes: `navbar-dark fixed-top`

## Content Patterns

### Room Page Structure
Each sala follows this pattern:
1. Standard HTML5 head with Bootstrap 5.3.3 + FontAwesome 6.5.2 CDN
2. Google Fonts: Playfair Display (headings) + Roboto (body)
3. Container with `margin-top: 90px` to account for fixed navbar
4. Video cards using Plyr.js for video playback

### Video Integration
- Uses Plyr.js (`cdn.plyr.io/3.7.8`) for enhanced video player
- Video structure: `<video class="plyr" controls poster="..."><source src="videos/..." type="video/mp4">`
- Poster images stored in `theme_front/img/sala{N}/`
- Video files referenced in `videos/sala{N}/` (may be empty in current state)

### Styling Conventions
- Primary brand color: `#4a2c1e` (dark brown)
- Background: `#faf8f5` (off-white)
- Accent color: `#f1dca7` (light gold)
- Cards use `box-shadow: 0px 2px 10px rgba(0,0,0,0.1)` with hover transform
- Section titles: centered, `font-family: 'Playfair Display'`, `color: #4a2c1e`

## Development Notes

### Modern Design System
- **CSS Architecture**: `base.css` (core styles) + `modern-components.css` (modern UI components)
- **Color Palette**: Primary `#4a2c1e`, Accent `#f1dca7`, Background gradients with glassmorphism effects
- **Typography**: Playfair Display (headings) + Roboto (body) with improved hierarchy
- **Animations**: CSS keyframes for fadeIn, bounce, and loading effects with staggered delays

### Asset Management
- Images duplicated in both `templates/img/` and `theme_front/img/`
- Bootstrap and FontAwesome loaded from CDN (not local lib files)
- Local vendor libraries in `theme_front/lib/` appear unused

### Modern UI Components
- **Hero Section**: Gradient overlays, animated content, scroll indicators
- **Cards**: Glassmorphism effects, hover transforms, shadow elevation
- **Video Integration**: Modern video cards with expert avatars and metadata badges
- **Interactive Elements**: FAB, scroll-to-top, smooth scrolling, tooltips

### Mobile Considerations
- Responsive breakpoints with mobile-first approach
- Modern CSS Grid and Flexbox layouts
- Touch-friendly navigation elements
- Optimized media queries for mobile devices

### File Organization
- Room-specific images in `theme_front/img/sala{N}/`
- Shared UI images in `theme_front/img/`
- Video content expected in `videos/sala{N}/` structure
- Modern CSS components in `theme_front/css/modern-components.css`

### Implementation Guidelines
- Use gradient backgrounds and glassmorphism for modern aesthetic
- Implement staggered animations for card grids (0.1s delay increments)
- Follow sala color coding: Sala 1 (#7f2629), Sala 2 (#cda787), Sala 3 (#415364), Sala 4 (#8c9091)
- Include floating action buttons and scroll indicators for enhanced UX

When adding new rooms or content, follow the established patterns for consistency with the existing codebase structure and styling conventions.