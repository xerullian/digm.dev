import { defineTable } from 'convex/server';
import { v } from 'convex/values';

export const tags = defineTable({
  name: v.string(),
});
