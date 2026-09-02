import type { APIRoute } from "astro";
import { auth } from "../../../lib/auth";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    return auth.handler(request);
};

export const GET: APIRoute = async ({ request }) => {
  return auth.handler(request);
};
