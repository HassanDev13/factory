import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {  ShieldCheck, UserMinus } from "lucide-react";
import { User } from "../../../../../db/schema/users";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {

    header: "Country",
    cell: ({ row }) => {
      const user = row.original;
      return user.country?.name || "N/A";
    },

  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div
          className={`${
            user.status === "active" ? "bg-green-600" : "bg-red-600"
          } text-white p-1 rounded-md flex justify-center items-center`}
        >
          {user.status}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <ShieldCheck className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <UserMinus className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];
