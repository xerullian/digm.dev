import { defineTable } from 'convex/server';
import { v } from 'convex/values';

export const snippetVersions = defineTable({
  snippetId: v.id('snippets'),
  code: v.string(),
}).index('by_snippet', ['snippetId']);
