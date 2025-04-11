import {internalMutation} from '../_generated/server';
import {v} from 'convex/values';
import {userByClerkId} from "./user.ts";

export default internalMutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
  },
  handler: async (context, { clerkId, email }) => {
    const existingUser = await userByClerkId(context, clerkId);

    if (existingUser) {
      console.log(`User ${clerkId} already exists.`);
      return existingUser._id;
    }

    // If the user doesn't exist, create them
    console.log(`Creating new user for Clerk ID: ${clerkId}`);
    return await context.db.insert('users', {
      clerkId: clerkId,
      email: email,
      // ...other fields
    });
  },
});
