import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);
  /* Get form data */
  const formData = await request.formData();
  console.log(formData)
  const email = formData.get("email")?.toString();
  const passwd = formData.get("passwd")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !passwd || !name) {
    return new Response(
      "Missing form data",
      { status: 400 }
    );
  }

  /* Create user */
  try {
    await auth.createUser({
      email,
      password:passwd,
      displayName: name,
    });
  } catch (error: any) {
    return new Response(
      "Something went wrong bitch",
      { status: 400 }
    );
  }
  return redirect("/signin");
};