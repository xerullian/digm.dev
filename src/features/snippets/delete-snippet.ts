import { convex } from '~/app/convex';
import { api } from '~/convex/_generated/api';
import type { Id } from '~/convex/_generated/dataModel';

export async function deleteSnippet(id: Id<'snippets'>) {
  return convex.mutation(api.snippets.remove, { id });
}
