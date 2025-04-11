import { convex } from '~/app/convex';
import { api } from '~/convex/_generated/api';

export async function readSnippets() {
  return convex.query(api.snippets.read);
}
