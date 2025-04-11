// import type { APIRoute } from "astro";
// export const prerender = false;
//
// import { database } from "@snipbit/database";
// import { addSnippetWithParameters } from "@snipbit/features/snippets";
//
// export const POST: APIRoute = async ({ request, locals }) => {
//   console.log('before auth check, locals:', locals);
//   if (!locals.auth().userId) {
//     return new Response('Unauthorized', { status: 401 })
//   }
//
//   console.log('user:', locals.auth());
//
//   const body = await request.formData();
//   console.log("add snippet → body:", body);
//
//   const result = await addSnippetWithParameters({
//     database,
//     snippetData: {
//       name: body.get('name') as string,
//       description: body.get('description') as string,
//       file_type: {
//         id: body.get('file_type') as string
//       }
//     },
//     userId: locals.auth().userId
//   });
//
//   console.log('resut:', result);
//
//   return new Response(JSON.stringify({ ok: true }));
// };
