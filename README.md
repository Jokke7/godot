# Godot

Personal website for code, thoughts, poetry, and CV.

## Architecture

**Stack:** Astro v5 + Tailwind CSS v4 + Clerk authentication + TypeScript (strict mode)

**Structure:**
- `src/pages/` - File-based routing
  - `/` - Landing page with Starfield animation
  - `/cv/[flavor]` - Dynamic CV with tag-based filtering
  - `/blog` - Blog listing & individual posts
  - `/poem/[date]` - Date-based poem routing
- `src/components/` - Reusable UI components (Header, Footer, Starfield)
- `src/layouts/` - Page layouts (BaseLayout with favicon support)
- `src/content/` - Content collections (blog, poems, experience, education, skills, extracurricular, cv-flavors)
- `src/lib/` - Utilities (cv.ts for CV data filtering)
- `src/middleware.ts` - Clerk auth protection for /cv routes

**Content Collections:**
- **Blog posts** - Markdown with frontmatter (title, description, date, tags, category, coverImage)
- **Poems** - Markdown with frontmatter (title, date, tags, mood)
- **CV data** - JSON (experience, education, skills, extracurricular, cv-flavors)
- CV flavors filter content by tags (e.g., "software-engineer", "designer", "full")

**Authentication:**
- `/cv/*` routes protected by Clerk middleware
- Other routes public

**Design System:**
- **CV section** - Dark theme with indigo/cyan gradients
- **Blog** - Brutalist design with bold typography, category colors, sharp borders
- **Poems** - Newspaper-style frame on dark background with keyboard navigation
- Color scheme: Indigo (#6366f1) to Cyan (#06b6d4) gradient
- Logo: SVG with matching gradient colors

**Images:**
- `/public/images/` - Graphics/UI (logo, favicons)
- `/public/images/blog/` - Blog post images
- Cover images: 1600x900px (16:9 ratio)
- Content images: 1200px wide

**Routing:**
- Blog: `/blog` → listing, `/blog/[slug]` → individual posts
- Poems: `/poem` → redirects to latest, `/poem/[date]` → specific date (YYYY-MM-DD)
- CV: `/cv/[flavor]` → filtered views (software-engineer, designer, full)
