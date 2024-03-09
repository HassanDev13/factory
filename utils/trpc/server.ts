import { cache } from "react";
import { headers } from "next/headers";
import { createTRPCContext } from "@/server/api/trpc";

import { createClient } from "../supabase/server";
import { createCaller } from "./shared";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
  const supabase = createClient();
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");
  const session = (await supabase.auth.getSession()).data.session;
  return createTRPCContext({
    auth: session,
    headers: heads,
  });
});

export const api = createCaller(createContext);
