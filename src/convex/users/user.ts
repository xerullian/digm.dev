import type { QueryCtx as QueryContext, MutationCtx as MutationContext } from "../_generated/server";

export async function userByClerkId(
  context: QueryContext | MutationContext,
  clerkId: string
) {
  return await context.db
    .query("users")
    .withIndex("by_clerk_id", q => q.eq("clerkId", clerkId))
    .unique();
}
