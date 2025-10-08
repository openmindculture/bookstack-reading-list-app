import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { bookSchema } from '@schemas/bookSchema';

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: bookSchema,
});

// prevent false positive JetBrains code inspection warning
// noinspection JSUnusedGlobalSymbols
export const collections = { book: books };
