# Godot

Personal website for code, thoughts, poetry, and CV.

## Architecture

**Stack:** Astro v5 + Tailwind CSS v4 + Clerk authentication + TypeScript

**Structure:**
- `src/pages/` - File-based routing (index, CV, blog, poems)
- `src/components/` - Reusable UI components (Header, Footer, Starfield)
- `src/layouts/` - Page layouts (BaseLayout with favicon support)
- `src/content/` - Content collections (blog, poems, experience, education, skills, extracurricular, cv-flavors)
- `src/lib/` - Utilities (cv.ts for CV data filtering)
- `src/middleware.ts` - Clerk auth protection for /cv routes

**Content Collections:**
- Blog posts and poems use `type: 'content'` (Markdown)
- CV data uses `type: 'data'` (JSON/YAML)
- CV flavors filter content by tags (e.g., "software-engineer", "designer", "full")

**Authentication:**
- `/cv/*` routes protected by Clerk middleware
- Other routes public

**Styling:**
- CSS custom properties in `src/styles/global.css`
- CV section uses standard layout
- Blog and poems will have distinct styling

**Favicons:**
- Main site: `/images/favicon.png`
- CV section: `/images/favicon_cv.svg`
