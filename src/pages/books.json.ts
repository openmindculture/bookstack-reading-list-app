import { getCollection, type CollectionEntry } from 'astro:content';

// prevent false positive JetBrains code inspection warning
// noinspection JSUnusedGlobalSymbols
export async function GET() {
  const bookEntries: CollectionEntry<'book'>[] = (
    await getCollection('book')
  ).sort((a, b) => b.data.pubYear - a.data.pubYear);
  const books = bookEntries.map((entry) => ({
    ...entry.data,
    id: entry.id,
  }));

  return new Response(JSON.stringify(books), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/* Note:
 Astro automatically calls this endpoint at build time (for static sites, SSG mode) or on request (SSR mode) and serves the raw JSON response. This file, books.json.ts will creates a static file, /books.json
 * However, we can't omit the verbose GET content-type header boilerplate code, and we can't avoid all the ES6/JS/TS braces, brackets, and paranthesis here, either.
 */
