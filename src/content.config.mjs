import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  blog: defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  }),
  cheatsheets: defineCollection({
    loader: glob({ base: './src/content/cheatsheets', pattern: '**/*.{md,mdx}' }),
  }),
  projects: defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  }),
};
