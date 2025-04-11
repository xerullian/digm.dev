import { internalMutation } from '../_generated/server';
import { v } from 'convex/values';
import { userByClerkId } from '../users/user.ts';

export default internalMutation({
  args: {
    clerkId: v.string(),
    name: v.string(),
    code: v.string(),
    language: v.string(),
    description: v.optional(v.string()),
    tags: v.optional(v.array(v.id('tags'))),
    visibility: v.optional(v.union(v.literal('Public'), v.literal('Private'))),
  },
  handler: async (context, args) => {
    const user = await userByClerkId(context, args.clerkId);
    if (!user) {
      throw new Error('User not found in database.');
    }

    // The form sends language as '.js', so we remove the dot.
    const languageExtension = args.language.replace('.', '');
    const fileType = await context.db
      .query('fileTypes')
      .filter(q => q.eq(q.field('extension'), languageExtension))
      .first();

    if (!fileType) {
      throw new Error(`File type for extension '${languageExtension}' not found.`);
    }

    const snippetId = await context.db.insert('snippets', {
      userId: user._id,
      fileTypeId: fileType._id,
      name: args.name,
      description: args.description ?? '',
      visibility: args.visibility ?? 'Private',
      tags: args.tags ?? [],
    });

    await context.db.insert('snippetVersions', {
      snippetId,
      code: args.code,
    });

    return snippetId;
  },
});
