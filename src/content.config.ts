import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const plays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plays' }),
  schema: () =>
    z.object({
      title: z.string(),
      category: z.enum(['cocuk', 'yetiskin']),
      status: z.enum(['repertuvarda', 'yakinda', 'arsiv']).default('repertuvarda'),
      synopsis: z.string(),
      ageRange: z.string().optional(),
      duration: z.string().optional(),
      cast: z.array(z.string()).default([]),
      crew: z.array(z.object({ role: z.string(), name: z.string() })).default([]),
      heroImage: z.string().optional(),
      gallery: z.array(z.string()).default([]),
      order: z.number().default(0),
      featured: z.boolean().default(false),
    }),
});

const announcements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/announcements' }),
  schema: () =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      href: z.string().optional(),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: () =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      source: z.string(),
      summary: z.string(),
      externalUrl: z.string().optional(),
    }),
});

export const collections = { plays, announcements, news };
