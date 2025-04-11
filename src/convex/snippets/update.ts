import { mutation } from '../_generated/server';
import { v } from 'convex/values';

export default mutation({
  args: {
    id: v.id('snippets'),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    fileTypeId: v.optional(v.id('fileTypes')),
    tags: v.optional(v.array(v.id('tags'))),
    visibility: v.optional(v.union(v.literal('Public'), v.literal('Private'))),
  },
  handler: async (context, args) => {
    const { id, ...rest } = args;
    await context.db.patch(id, rest);
  },
});
