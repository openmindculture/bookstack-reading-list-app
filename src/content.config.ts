// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    coverUrl: z.string().optional(),
    externalUrl: z.string().optional(),
    icon: z.enum(['book', 'blogpost', 'podcast']).default('book').optional(),
    isbn: z.string().optional(),
    language: z.enum(['en', 'de', 'ar-LB']).optional(),
    pubYear: z.number().int().optional(),
    updatedYear: z.number().int().optional(),
  }),
});

// noinspection JSUnusedGlobalSymbols
export const collections = { book: books };
