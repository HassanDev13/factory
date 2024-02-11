import createClient from "../../utils/supabase/client";
import { createServerClient } from "@supabase/ssr";
import { TypedSupabaseClient } from "../../utils/types";

export async function register(
  client: TypedSupabaseClient,
  email: string,
  password: string,
  
) {
  const { data, error } = await client.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "https://example.com/welcome",
      data: {
        gender: "John Doe",
      },
    },
  });

  if (error) {
    throw error;
  }
}
