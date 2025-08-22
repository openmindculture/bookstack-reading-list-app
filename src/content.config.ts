import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    // Astro generates a unique id for every item automatically
    title: z.string(),
    author: z.string(),
    description: z.string().optional(),
    coverUrl: z.string().optional(),
    /* Tailwind detection vs. additional safelisting? */
    coverClassName: z.enum(['bg-blue', 'bg-gray-800']).optional(),
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
