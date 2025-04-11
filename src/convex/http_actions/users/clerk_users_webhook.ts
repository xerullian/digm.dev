import {httpAction} from '../../_generated/server';
import {internal} from "../../_generated/api";
import {Webhook} from 'svix';
import {WebhookEvent} from '@clerk/clerk-sdk-node';

export const clerk_users_webhook = {
  path: "/clerk-users-webhook",
  method: "POST",
  handler: httpAction(async (context, request: Request) => {
    const event = await validateRequest(request);
    if (!event) {
      return new Response("Error occurred", { status: 400 });
    }

    switch (event.type) {
      case 'user.created': {
        await context.runMutation(internal.users.create.default, {
          clerkId: event.data.id,
          email: event.data.email_addresses[0]?.email_address,
        });
        break;
      }
      case 'user.updated': {
        await context.runMutation(internal.users.update.default, {
          clerkId: event.data.id,
          email: event.data.email_addresses[0]?.email_address,
        });
        break;
      }
      case 'user.deleted': {
        await context.runMutation(internal.users.delete.default, {
          clerkId: event.data.id as string,
        });
        break;
      }
      default: {
        console.log('Unhandled Clerk event type:', event.type);
      }
    }

    return new Response(undefined, { status: 200 });
  }),
} as const;

async function validateRequest(request: Request): Promise<WebhookEvent | undefined> {
  const payloadString = await request.text();
  const svixHeaders = {
    "svix-id": request.headers.get("svix-id")!,
    "svix-timestamp": request.headers.get("svix-timestamp")!,
    "svix-signature": request.headers.get("svix-signature")!,
  };
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
  try {
    return wh.verify(payloadString, svixHeaders) as unknown as WebhookEvent;
  } catch (error) {
    console.error("Error verifying webhook event", error);
    return undefined;
  }
}
