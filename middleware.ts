import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/','/sign-in(.*)', '/sign-up(.*)',  '/dashboard']);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req) && !auth().userId) {
    // Add custom logic to run before redirecting
    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
