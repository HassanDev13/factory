"use client";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import useGetAllUsers from "../../../../../hooks/user/use-all-users";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import Image from "next/image";
import appRouter from "next/dist/client/components/app-router";
import { api } from "../../../../../utils/trpc/client";

type Props = {
  params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  const { data, error, isLoading } = api.user.users.useQuery();
  if (error) {
    return <div>error</div>;
  }
  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3 justify-center  items-center flex-grow h-full ">
        <Image
          src="/mobilefactory.svg"
          className="mb-30 items-center"
          alt="factory"
          width={100}
          height={100}
        />
        <p className="text-xs text-center">Factory - Loading ... </p>
      </div>
    );
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
