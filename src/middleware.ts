import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(() => {
  return new Response(null, { status: 200 });
});

// Ensure this matches the routes that require Clerk authentication
export const config = {
  matcher: ["/admin/jobs/:path*"],
};

