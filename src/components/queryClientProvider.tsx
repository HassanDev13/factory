"use client";

import { useEffect, useState } from "react";
import createClient from "../../utils/supabase/client";
import { QueryClient, QueryClientProvider } from "react-query";

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const supabase = createClient();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        // defaultOptions: {
        //   queries: {
        //     // With SSR, we usually want to set some default staleTime
        //     // above 0 to avoid refetching immediately on the client
        //     staleTime: 60 * 1000,
        //   },
        // },
      })
  );
  useEffect(() => {
    supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "Roles",
        },
        (payload) => supabase.auth.refreshSession()
      )
      .subscribe();

    supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "Roles",
        },
        (payload) => supabase.auth.refreshSession()
      )
      .subscribe();
  }, [supabase]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
