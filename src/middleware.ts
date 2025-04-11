import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

const signInRoute = '/login';
const isProtectedRoute = createRouteMatcher(['/dashboard', '/snippets/new']);

export const onRequest = clerkMiddleware((auth, context) => {
  const { redirectToSignIn, userId } = auth();

  console.log('context.request', context.request);
  if (!userId && isProtectedRoute(context.request)) {
    console.log('not signed in, redirecting to', signInRoute);
    return redirectToSignIn({
      returnBackUrl: signInRoute,
    });
  }
});
