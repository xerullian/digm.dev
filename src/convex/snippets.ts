// import { v } from 'convex/values';
// import { internalMutation, mutation, query } from './_generated/server';
// import { userByClerkId } from './users/user';
//
// // --- CREATE ---
// export const add = internalMutation({
//   args: {
//     clerkId: v.string(),
//     name: v.string(),
//     description: v.optional(v.string()),
//     fileTypeId: v.optional(v.id('fileTypes')),
//     tags: v.optional(v.array(v.id('tags'))),
//     visibility: v.optional(v.union(v.literal('Public'), v.literal('Private'))),
//   },
//   handler: async (context, args) => {
//     const user = await userByClerkId(context, args.clerkId);
//     if (!user) {
//       throw new Error('User not found in database.');
//     }
//     let fileTypeId = args.fileTypeId;
//     if (!fileTypeId) {
//       const plaintextFileType = await context.db
//         .query('fileTypes')
//         .filter((q) => q.eq(q.field('name'), 'plaintext'))
//         .first();
//       if (!plaintextFileType) {
//         throw new Error("Default 'plaintext' file type not found.");
//       }
//       fileTypeId = plaintextFileType._id;
//     }
//     return await context.db.insert('snippets', {
//       userId: user._id,
//       fileTypeId,
//       name: args.name,
//       description: args.description ?? '',
//       visibility: args.visibility ?? 'Private',
//       tags: args.tags ?? [],
//     });
//   },
// });
//
// // --- READ ---
// export const read = query({
//   handler: async (context) => {
//     const identity = await context.auth.getUserIdentity();
//     if (!identity) {
//       throw new Error('Not authenticated');
//     }
//     const user = await userByClerkId(context, identity.subject);
//     if (!user) {
//       return [];
//     }
//     return await context.db.query('snippets').withIndex('by_user', (q) => q.eq('userId', user._id)).collect();
//   },
// });
//
// // --- UPDATE ---
// export const update = mutation({
//   args: {
//     id: v.id('snippets'),
//     name: v.optional(v.string()),
//     description: v.optional(v.string()),
//     fileTypeId: v.optional(v.id('fileTypes')),
//     tags: v.optional(v.array(v.id('tags'))),
//     visibility: v.optional(v.union(v.literal('Public'), v.literal('Private'))),
//   },
//   handler: async (context, args) => {
//     const { id, ...rest } = args;
//     await context.db.patch(id, rest);
//   },
// });
//
// // --- DELETE ---
// export const remove = mutation({
//   args: { id: v.id('snippets') },
//   handler: async (context, args) => {
//     await context.db.delete(args.id);
//   },
// });
