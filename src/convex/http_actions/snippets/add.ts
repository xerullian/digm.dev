import { httpAction } from '../../_generated/server';
import { internal } from '../../_generated/api';

export const add = {
  path: '/api/snippets/new',
  method: 'POST',
  handler: httpAction(async (context, request: Request) => {
    const identity = await context.auth.getUserIdentity();
    if (!identity) {
      return new Response('Unauthorized', { status: 401 });
    }
    const clerkId = identity.subject;

    const formData = await request.formData();
    const name = formData.get('name') as string;
    const code = formData.get('code') as string;
    const language = formData.get('language') as string;

    if (!name || !code || !language) {
      return new Response("Bad request: 'name', 'code', and 'language' are required", {
        status: 400,
      });
    }

    await context.runMutation(internal.snippets.add.default, {
      name,
      clerkId,
      code,
      language,
    });

    return new Response(undefined, {
      status: 303,
      headers: { Location: '/dashboard' },
    });
  }),
} as const;
