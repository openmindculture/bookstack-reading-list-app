import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const bookSchema = z.object({
  // Astro generates a unique id for every item automatically
  id: z.string().optional(),
  // alterantively in .tsx components:
  // type BookProps = z.infer<typeof bookSchema> & { id: string };
  title: z.string(),
  author: z.string(),
  description: z.string().optional(),
  coverUrl: z.string().optional(),
  /* Tailwind detection vs. additional safelisting? */
  coverClassName: z.enum(['bg-blue','bg-blue-slate','bg-blue-950', 'bg-gray-800', 'bg-rose-500', 'bg-stone-800','bg-slate-900','bg-fuchsia-900','bg-red-100','bg-yellow-800']).optional(),
  externalUrl: z.string().optional(),
  icon: z.enum(['book', 'blogpost', 'podcast']).default('book').optional(),
  isbn: z.string().optional(),
  language: z.enum(['en', 'de', 'ar-LB']).optional(),
  pubYear: z.number().int(),
  updatedYear: z.number().int().optional(),
  showOnHomepage: z.boolean().optional(),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: bookSchema,
});

// prevent false positive JetBrains code inspection warning
// noinspection JSUnusedGlobalSymbols
export const collections = { book: books };
