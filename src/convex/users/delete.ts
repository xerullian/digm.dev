import { internalMutation } from '../_generated/server';
import {v} from 'convex/values';
import {userByClerkId} from "./user.ts";

export default internalMutation({
  args: { clerkId: v.string() },
  handler: async (context, { clerkId }) => {
    const existingUser = await userByClerkId(context, clerkId);

    if (!existingUser) {
      throw new Error('User not found for deletion');
    }

    await context.db.delete(existingUser._id);
  },
});
