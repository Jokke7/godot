import { defineCollection, z } from 'astro:content';

// Blog posts - Markdown with frontmatter
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    category: z.enum(['philosophy', 'tech', 'personal', 'other']).default('other'),
    coverImage: z.string().optional(), // Path to cover image
    coverAlt: z.string().optional(), // Alt text for cover image
  }),
});

// Poems - Markdown with frontmatter
const poems = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    mood: z.string().optional(), // e.g., "melancholic", "hopeful"
  }),
});

// CV Experience - JSON data
const experience = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
    tags: z.array(z.string()), // e.g., ["software", "design", "leadership"]
    skills: z.array(z.string()).optional(),
    highlights: z.array(z.string()),
    order: z.number().default(0), // For sorting
  }),
});

// CV Education - JSON data
const education = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    degree: z.string(),
    institution: z.string(),
    period: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    achievements: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

// CV Skills - JSON data
const skills = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(), // e.g., "Programming Languages", "Design Tools"
    items: z.array(z.object({
      name: z.string(),
      level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
      tags: z.array(z.string()), // For filtering by flavor
    })),
    order: z.number().default(0),
  }),
});

// CV Extracurricular Activities - JSON data
const extracurricular = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    period: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// CV Flavors configuration - JSON data
const cvFlavors = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()), // Which tags to include (["*"] for all)
    sections: z.array(z.string()), // Which sections to show
    emphasize: z.array(z.string()).optional(), // What to highlight
    order: z.number().default(0),
  }),
});

export const collections = {
  blog,
  poems,
  experience,
  education,
  extracurricular,
  skills,
  'cv-flavors': cvFlavors,
};
