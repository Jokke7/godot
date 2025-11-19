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
  
  // If user is not authenticated and trying to access protected route
  if (!userId && isProtectedRoute(context.request)) {
    return redirectToSignIn();
  }
});
