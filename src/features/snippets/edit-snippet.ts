import { convex } from '~/app/convex';
import { api } from '~/convex/_generated/api';
import type { Id } from '~/convex/_generated/dataModel';

export async function editSnippet(id: Id<'snippets'>, data: any) {
  return convex.mutation(api.snippets.update, { id, ...data });
}
