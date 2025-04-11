import { mutation } from '../_generated/server';
import { v } from 'convex/values';

export default mutation({
  args: { id: v.id('snippets') },
  handler: async (context, args) => {
    await context.db.delete(args.id);
  },
});
