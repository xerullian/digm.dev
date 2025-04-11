import { defineTable } from 'convex/server';
import { v } from 'convex/values';

export const snippets = defineTable({
  userId: v.id('users'),
  fileTypeId: v.id('fileTypes'),
  name: v.string(),
  description: v.string(),
  visibility: v.union(v.literal('Public'), v.literal('Private')),
  tags: v.array(v.id('tags')),
}).index('by_user', ['userId']);
