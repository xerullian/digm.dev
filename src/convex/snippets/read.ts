import { query } from "../_generated/server";
import { userByClerkId } from "../users/user.ts";

export default query({
  handler: async (context) => {
    const identity = await context.auth.getUserIdentity();
    if (!identity) {
      throw new Error('Not authenticated');
    }

    const user = await userByClerkId(context, identity.subject)

    if (!user) {
      return [];
    }

    return await context.db
      .query('snippets')
      .withIndex('by_user', q => q.eq('userId', user._id))
      .collect();
  },
});
