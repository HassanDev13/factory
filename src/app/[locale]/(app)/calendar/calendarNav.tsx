"use client";
import { Button } from "@/components/ui/button";
import { AvatarIcon } from "@radix-ui/react-icons";
import { User2Icon } from "lucide-react";
import React from "react";

type Props = {
  params: {
    locale: string;
    calendarTitle: string;
    allScheduledTasks: string;
    submitButtonText: string;
  };
};

export default function calendarNav({
  params: { locale, calendarTitle, allScheduledTasks, submitButtonText },
}: Props) {
  async function onSubmit() {
    console.log("submiting");
  }
  return (
    <>
      <nav className="flex justify-between p-5 ">
        <h1 className="text-xl mt-3 font-bold">{calendarTitle}</h1>
        <AvatarIcon className="size-10" />
      </nav>
      <div className="flex justify-between w-full p-5 ">
        <h1 className="font-semibold mt-2">{allScheduledTasks}</h1>
        <Button
          type="submit"
          onClick={onSubmit}
          className="bg-dark-blue text-white"
        >
          {submitButtonText}
        </Button>
      </div>
    </>
  );
}
