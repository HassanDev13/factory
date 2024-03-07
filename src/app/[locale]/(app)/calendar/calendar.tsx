import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

type Props = {
  params: {
    locale: string;
    tasks: string;
  };
};

const Calendar = ({ params: { locale, tasks } }: Props) => {
  const days = [
    { name: "SUN", number: 1, tasks: 3 },
    { name: "MON", number: 2, tasks: 2 },
    { name: "TUE", number: 3, tasks: 1 },
    { name: "WED", number: 1, tasks: 3 },
    { name: "THU", number: 2, tasks: 2 },
    { name: "FRI", number: 3, tasks: 1 },
    { name: "SAT", number: 1, tasks: 3 },
    { name: "SUN", number: 1, tasks: 3 },
    { name: "MON", number: 2, tasks: 2 },
    { name: "TUE", number: 3, tasks: 1 },
    { name: "WED", number: 1, tasks: 3 },
    { name: "THU", number: 2, tasks: 2 },
    { name: "FRI", number: 3, tasks: 1 },
    { name: "SAT", number: 1, tasks: 3 },
    { name: "SUN", number: 1, tasks: 3 },
    { name: "MON", number: 2, tasks: 2 },
    { name: "TUE", number: 3, tasks: 1 },
  ];

  return (
    <>
      <div className="grid md:grid-cols-6 grid-cols-2  ">
        {days.map((day, index) => (
          <Card
            key={index}
            className="bg-white h-28 m-3 flex flex-col justify-center items-start"
          >
            <CardContent className="p-0 mx-4">
              <div>{day.name}</div>
              <div>{day.number}</div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <CheckCircle className="size-5" />
                <span>
                  {day.tasks} {tasks}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Calendar;
