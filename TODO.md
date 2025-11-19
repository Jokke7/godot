# TODO - Godot CV Website

## Project Overview

**Project Name:** Godot  
**Repository:** https://github.com/Jokke7/godot (Private)  
**Current Branch:** `feature/clerk-authentication`  
**Tech Stack:** Astro v5.7+, Tailwind CSS v4, Clerk Authentication, TypeScript (strict mode)

### Purpose
Personal CV website with authentication-protected content and multiple "flavors" (filtered versions for different job types: software engineer, designer, etc.). Uses content collections system for easy data management.

### Key Requirements
- ✅ Fast, modern landing page with starfield animation
- ✅ Protected CV routes requiring authentication (Clerk)
- ✅ Content Collections with JSON-based CV data
- ✅ Dynamic CV "flavors" system with tag-based filtering
- ✅ Responsive design with dark theme (indigo/cyan accents)
- 🔲 Production deployment with custom domain
- 🔲 CI/CD pipeline for automated testing

---

## ✅ DECISIONS RESOLVED

### 1. Hosting Adapter Configuration **[COMPLETED]**

**Decision:** Cloudflare Pages (Option B)

**Rationale:**
- Free tier with unlimited bandwidth and custom domains
- Excellent performance via Cloudflare's edge network
- First-class Clerk authentication support
- No cold starts (unlike Render's free tier)
- Perfect for static sites with authentication
- Aligns with original project plan

**Changes Applied (Commit: 556dfdd):**
- ✅ Uninstalled `@astrojs/node` package
- ✅ Installed `@astrojs/cloudflare` adapter
- ✅ Updated `astro.config.mjs` to use `cloudflare()` adapter
- ✅ Build tested and working successfully

---

## Pending Tasks

### High Priority

- [ ] **Set up Cloudflare Pages project** ⚡ READY TO DEPLOY
  - Log into Cloudflare Dashboard
  - Navigate to Workers & Pages → Create Application → Pages
  - Connect GitHub repository: `Jokke7/godot`
  - Configure build settings:
    - Framework preset: `Astro`
    - Build command: `npm run build`
    - Build output directory: `dist`
    - Node version: `18` or higher
  - Branch: Deploy `feature/clerk-authentication` initially (or merge to `main` first)
  
- [ ] **Configure production environment variables in Cloudflare**
  - In Cloudflare Pages → Settings → Environment variables
  - Add for **Production**:
    - `PUBLIC_CLERK_PUBLISHABLE_KEY` = `pk_live_...` (get from Clerk Dashboard)
    - `CLERK_SECRET_KEY` = `sk_live_...` (get from Clerk Dashboard)
  - Note: May need to use test keys initially if production keys aren't set up yet

- [ ] **Change favicon**
  - Replace `/public/favicon.svg` with custom Godot icon (user creating)
  - Update any references in `src/layouts/BaseLayout.astro`

### Medium Priority

- [ ] **Configure custom domain with DNS**
  - Add custom domain in hosting provider dashboard
  - Set up DNS records (CNAME or A records)
  - Enable SSL/TLS (usually automatic)
  - Test domain access
  
- [ ] **Add GitHub Actions for CI/CD**
  - Create `.github/workflows/ci.yml`
  - Run lint/type checks on PRs
  - Validate builds before merge
  - Hosting provider handles deployment automatically

### Low Priority

- [ ] **Test full deployment and authentication flow**
  - Verify landing page loads and animation works
  - Test authentication redirects
  - Confirm CV pages are protected
  - Test all CV flavors (`/cv/software-engineer`, `/cv/designer`, `/cv/full`)
  - Verify custom domain works with HTTPS

- [ ] **Document rollback procedures**
  - Add section to `README.md`
  - Document how to rollback via Git
  - Document how to rollback via hosting provider UI
  - Test rollback process

---

## Completed Tasks ✅

### Phase 1: Project Initialization
- [x] Initialize Astro v5.7+ with TypeScript strict mode
- [x] Install Tailwind CSS v4 integration
- [x] Install Clerk authentication package
- [x] Configure Git repository with proper `.gitignore`
- [x] Set up folder structure (`components/`, `layouts/`, `pages/`, `styles/`, `content/`, etc.)
- [x] Create environment variables template (`.env.example`)

### Phase 2: Base Layouts and Components
- [x] Build `BaseLayout.astro` with SEO meta tags, Open Graph, Twitter Cards
- [x] Create `Header.astro` with responsive navigation and mobile menu
- [x] Create `Footer.astro` with social links
- [x] Set up Tailwind theme with CSS custom properties in `theme.css`
- [x] Dark theme with indigo/cyan accent colors

### Phase 3: Landing Page
- [x] Build hero section with call-to-action in `index.astro`
- [x] Port Starfield animation component from previous project
- [x] Rebrand to "Godot" with stylized gradient logo

### Phase 4: Authentication System
- [x] Configure Clerk authentication in `astro.config.mjs`
- [x] Create middleware to protect `/cv` routes (`src/middleware.ts`)
- [x] Add sign-in page (`/sign-in`) with Clerk components
- [x] Add sign-up page (`/sign-up`) with Clerk components
- [x] Implement server-side auth checks and redirects
- [x] Add UserButton component for authenticated user menu

### Phase 5: CV System
- [x] Design and build CV page layout with multiple sections
- [x] Set up Astro Content Collections with TypeScript/Zod schemas
- [x] Create JSON-based collections: `experience`, `education`, `skills`, `cv-flavors`
- [x] Create Markdown collections: `blog`, `poems`
- [x] Implement tag-based filtering system for CV flavors
- [x] Create dynamic routes for CV flavors (`/cv/[flavor].astro`)
- [x] Build flavor switcher UI component
- [x] Create example content in all collections

### Phase 6: GitHub Repository
- [x] Create GitHub repository (private): https://github.com/Jokke7/godot
- [x] Set up branches: `main`, `dev`, `feature/clerk-authentication`
- [x] Push all code with conventional commits
- [x] Create pull request template

### Phase 7: Documentation
- [x] Write comprehensive `README.md`
- [x] Document architecture and folder structure
- [x] Document setup instructions and environment variables
- [x] Document content collections system
- [x] Add troubleshooting section

### Phase 8: Deployment Preparation
- [x] **Switch to Cloudflare Pages adapter** (Commit: 556dfdd)
  - Uninstalled `@astrojs/node` package
  - Installed `@astrojs/cloudflare` adapter
  - Updated `astro.config.mjs` configuration
  - Tested build successfully

---

## Technical Notes

### Current Tech Stack
- **Framework:** Astro v5.7.4
- **Styling:** Tailwind CSS v4.0.8
- **Authentication:** Clerk (@clerk/astro)
- **Adapter:** @astrojs/cloudflare ✅
- **Content:** Astro Content Collections (JSON + Markdown)
- **Repository:** Git + GitHub (private)

### Environment Variables Required
```bash
# Development (in .env.local)
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Production (in hosting dashboard)
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
```

### Content Collections Structure
```
src/content/
├── experience/     (JSON) - Work experience entries
├── education/      (JSON) - Education entries  
├── skills/         (JSON) - Skills grouped by category
├── cv-flavors/     (JSON) - CV flavor definitions with tag filters
├── blog/           (MD)   - Blog posts
└── poems/          (MD)   - Creative writing
```

### CV Flavors System
Flavors filter CV content by tags:
- **software-engineer**: Shows entries tagged with `["software", "technical"]`
- **designer**: Shows entries tagged with `["design", "creative", "ux"]`
- **full**: Shows all entries `["*"]`

Add new flavors by creating JSON files in `src/content/cv-flavors/`.

### Branch Strategy
- `main` - Production baseline (1 commit)
- `dev` - Development branch (4 commits)  
- `feature/clerk-authentication` - Current work (8 commits, includes Cloudflare adapter)

Merge to `dev` first, then create PR to `main` for production deployment.

---

## Next Steps for Deployment

1. ✅ ~~Decide on hosting adapter~~ **COMPLETED** - Cloudflare Pages selected
2. ✅ ~~Switch adapter~~ **COMPLETED** - Cloudflare adapter installed and configured
3. ✅ ~~Test build locally~~ **COMPLETED** - Build successful
4. **Create Cloudflare Pages project** and connect GitHub repo ⚡ READY
5. **Add production environment variables** in Cloudflare dashboard
6. **Configure custom domain** (if applicable)
7. **Test authentication flow** in production
8. **Merge feature branch** to `dev`, then create PR to `main`
9. **Monitor first deployment** for any issues

---

**Last Updated:** November 19, 2025 (22:20 UTC)  
**Status:** ✅ Ready for Cloudflare Pages deployment - adapter configured and tested
