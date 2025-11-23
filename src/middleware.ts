import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

// Define protected routes - add more patterns here as needed
const isProtectedRoute = createRouteMatcher([
  '/cv(.*)',  // Protects /cv and all subpages like /cv/projects, /cv/about, etc.
  // Add more protected routes here:
  // '/blog/private(.*)',
  // '/admin(.*)',
]);

export const onRequest = clerkMiddleware((auth, context) => {
  try {
    const { redirectToSignIn, userId } = auth();
    
    // Log successful auth check to prove we got this far
    console.log(`Middleware Check: UserID=${userId}, Path=${context.url.pathname}`);

    if (!userId && isProtectedRoute(context.request)) {
      return redirectToSignIn();
    }
  } catch (error) {
    // This catches the crash and prints the REAL error to the Cloudflare logs
    console.error("CRITICAL MIDDLEWARE ERROR:", JSON.stringify(error, Object.getOwnPropertyNames(error)));
    
    // This prints the error to the browser screen so you can see it
    return new Response(JSON.stringify({
      message: "Middleware Crashed",
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : "No stack"
    }, null, 2), { status: 500 });
  }
});
