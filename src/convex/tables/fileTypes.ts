import { defineTable } from 'convex/server';
import { v } from 'convex/values';

export const fileTypes = defineTable({
  name: v.string(),
});
