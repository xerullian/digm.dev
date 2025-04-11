import type { Snippet } from '@snipbit/database/types';
import { convex } from '~/app/convex';
import { api } from '~/convex/_generated/api';

export async function addSnippetWithParameters(
  snippetData: Snippet,
): Promise<{ id: string }> {
  const result = await convex.mutation(api.snippets.add, {
    name: snippetData.name,
    description: snippetData.description,
    fileTypeId: snippetData.file_type.id,
    tags: snippetData.tags.map((tag) => tag.id),
    visibility: snippetData.visibility,
  });

  return { id: result };
}
