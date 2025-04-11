import {internalMutation} from '../_generated/server';
import {v} from 'convex/values';
import {userByClerkId} from "./user.ts";

export default internalMutation({
  args: {
    clerkId: v.string(),
    email: v.optional(v.string()),
  },
  handler: async (context, { clerkId, email }) => {
    const existingUser = await userByClerkId(context, clerkId);

    if (!existingUser) {
      throw new Error('User not found for update');
    }

    await context.db.patch(existingUser._id, {
      email,
    });
  },
});
