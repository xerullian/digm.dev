import { internalMutation } from './_generated/server';

// An array of essential file types to ensure exist in the database.
const requiredFileTypes = [
  { name: 'plaintext' },
  { name: 'javascript' },
  { name: 'typescript' },
  { name: 'html' },
  { name: 'css' },
];

/**
 * Seeds the database with essential data.
 * This mutation is idempotent and can be safely run multiple times.
 */
export const seedDatabase = internalMutation({ 
  handler: async (ctx) => {
    for (const fileType of requiredFileTypes) {
      // Check if the file type already exists.
      const existing = await ctx.db
        .query('fileTypes')
        .filter((q) => q.eq(q.field('name'), fileType.name))
        .first();

      // If it doesn't exist, insert it.
      if (!existing) {
        await ctx.db.insert('fileTypes', { name: fileType.name });
        console.log(`Added '${fileType.name}' to fileTypes table.`);
      }
    }
    console.log('Database seeding complete.');
  },
});
