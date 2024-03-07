import React from "react";
import Calendar from "./calendar";
import CalendarNav from "./calendarNav";
import { useTranslations } from "next-intl";

type Props = {
  params: {
    locale: string;
  };
};

export default function App({ params: { locale } }: Props) {
  const t = useTranslations("calendar");

  const calendarTitle = t("calendar");
  const allScheduledTasks = t("all-scheduled-tasks");
  const submitButtonText = t("submit");
  const tasks = t("tasks");
  return (
    <div>
      <div>
        <CalendarNav
          params={{
            locale,
            calendarTitle,
            allScheduledTasks,
            submitButtonText,
          }}
        />
      </div>
      <main>
        <Calendar params={{ locale, tasks }} />
      </main>
    </div>
  );
}
