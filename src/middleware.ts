import { defineMiddleware } from "astro:middleware";
import { auth } from "./lib/auth";
// Routes that NEED a logged in user.
const protectedRoutes = ["/user", "/create"];
const publicRoutes = ["/", "/signin", "/signup", "/signout", "/api/auth/*"];

export const onRequest = defineMiddleware(async (context, next) => {
  const isPublicRoute = publicRoutes.some((route) => {
    if (route.endsWith("/*")) {
      return context.url.pathname.startsWith(route.slice(0, -2));
    }
    return context.url.pathname === route;
  });

  if (isPublicRoute) {
    return next();
  }

  const session = await auth.api.getSession({
    headers: context.request.headers,
  });

  context.locals.session = session;

  if (!session && protectedRoutes.includes(context.url.pathname)) {
    return context.redirect("/signin");
  }

  return next();
});
