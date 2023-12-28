
import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);
  /* Get form data */
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("passwd")?.toString();
  const name = formData.get("name")?.toString();
  if (!email || !password || !name) {
    return new Response("Missing form data", { status: 400 });
  }

  /* Create user */
  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong" + error + "this works madafaka",
        status: 400,
      })
    );
  }
  return new Response(JSON.stringify({ message: "Great", status: 200 }));
};
