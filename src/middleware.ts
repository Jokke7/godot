import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

// Define protected routes - add more patterns here as needed
const isProtectedRoute = createRouteMatcher([
  '/cv(.*)',  // Protects /cv and all subpages like /cv/projects, /cv/about, etc.
  // Add more protected routes here:
  // '/blog/private(.*)',
  // '/admin(.*)',
]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { redirectToSignIn, userId } = auth();
  
  if (!userId && isProtectedRoute(context.request)) {
    return redirectToSignIn({ returnBackUrl: context.request.url });
  }
});
