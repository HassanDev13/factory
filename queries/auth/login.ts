import createClient from "../../utils/supabase/client";
import { createServerClient } from "@supabase/ssr";
import { TypedSupabaseClient } from "../../utils/types";

export async function login(
  client: TypedSupabaseClient,
  email: string,
  password: string,

) {
  return  await client.auth.signInWithPassword({
    email: email,
    password: password,
  });
}