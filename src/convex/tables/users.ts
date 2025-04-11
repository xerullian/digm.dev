import { defineTable } from 'convex/server';
import { v } from 'convex/values';

export const users = defineTable({
  clerkId: v.string(),
  email: v.string(),
}).index('by_clerk_id', ['clerkId']);
