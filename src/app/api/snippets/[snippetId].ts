export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.formData();
  console.log("add snippet → body:", body);
  return new Response(JSON.stringify({ ok: true }));
};
