"use client";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import useGetAllUsers from "../../../../../hooks/user/use-all-users";
import { columns } from "./columns";
import { DataTable } from "./data-table";

type Props = {
  params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  const { data, error, isLoading } = useGetAllUsers();
  if (error) {
    return <div>error</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col  p-2 w-full">
      {
        <div className="w-full">
          {data && <DataTable columns={columns} data={data} />}
        </div>
      }
    </main>
  );
}
