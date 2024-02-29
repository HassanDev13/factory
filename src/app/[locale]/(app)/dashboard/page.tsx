import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ShapesIcon,
  UsersIcon,
  CrownIcon,
  AwardIcon,
} from "lucide-react";
import { Link } from "@/config/navigation";

const Dashboard = () => {
  const t = useTranslations("dashboard");

  const cards = [
    {
      icon: UsersIcon,
      value: "2000",
      title: t("number-of-students"),
      link: "#",
    },
    {
      icon: UsersIcon,
      value: "100",
      title: t("number-of-supervisors"),
      link: "#",
    },
    {
      icon: ShapesIcon,
      value: "13",
      title: t("number-of-initiatives"),
      link: "#",
    },
    {
      icon: CheckCircle,
      value: "2700",
      title: t("number-of-tasks"),
      link: "#",
    },
  ];

  const topTeams = [
    { icon: AwardIcon, name: "team 1", rank: 1, points: 3000 },
    { icon: AwardIcon, name: "team 2", rank: 2, points: 2109 },
    { icon: AwardIcon, name: "team 3", rank: 3, points: 409 },
    { icon: AwardIcon, name: "team 4", rank: 4, points: 200 },
    { icon: AwardIcon, name: "team 5", rank: 5, points: 100 },
    { icon: AwardIcon, name: "team 6", rank: 6, points: 99 },
    { icon: AwardIcon, name: "team 7", rank: 7, points: 99 },
  ];

  const topStudents = [
    { icon: CrownIcon, name: "student 1", rank: 1, points: 3000 },
    { icon: CrownIcon, name: "student 2", rank: 2, points: 2109 },
    { icon: CrownIcon, name: "student 3", rank: 3, points: 1999 },
    { icon: CrownIcon, name: "student 4", rank: 4, points: 819 },
    { icon: CrownIcon, name: "student 5", rank: 5, points: 687 },
    { icon: CrownIcon, name: "student 6", rank: 6, points: 565 },
    { icon: CrownIcon, name: "student 7", rank: 7, points: 543 },
    { icon: CrownIcon, name: "student 8", rank: 8, points: 522 },
    { icon: CrownIcon, name: "student 9", rank: 9, points: 412 },
    { icon: CrownIcon, name: "student 10", rank: 10, points: 401 },
    { icon: CrownIcon, name: "student 11", rank: 11, points: 300 },
    { icon: CrownIcon, name: "student 12", rank: 12, points: 200 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 h-screen ml-[3%] md:ml-0">
      {cards.map((card, index) => (
        <div key={index} className="md:col-span-1">
          <Link href={card.link} key={index}>
            <Card className="bg-costum-cream text-dark-blue">
              <CardContent className="flex flex-col justify-center items-start p-4">
                <div>
                  <card.icon />
                </div>
                <div className="font-bold text-5xl"> {card.value}</div>
                <div> {card.title}</div>
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}

      <div className="col-span-2 md:col-span-2 ">
        <Card className="bg-white h-full overflow-y-auto scrollbar rounded-3xl scrollbar-thumb-dark-blue scrollbar-track-gray-200">
          <h2 className="p-4">{t("top-teams")}</h2>
          <CardContent className="max-h-[calc(100vh-220px)] ">
            <div className="">
              {topTeams.map((team, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-costum-cream mb-2 p-3 rounded-xl"
                >
                  <span className="font-bold text-lg flex items-center">
                    <span>
                      {team.rank <= 3 ? <team.icon /> : `#${team.rank}`}
                    </span>
                    <span className="mx-2 font-normal">{team.name}</span>
                  </span>
                  <span className="font-bold">
                    {team.points} {t("points")}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="col-span-2 md:col-span-2 ">
        <Card className="bg-white h-full overflow-y-auto scrollbar-thin  scrollbar-thumb-dark-blue scrollbar-track-gray-200">
          <h2 className="p-4">{t("top-students")}</h2>
          <CardContent className="max-h-[calc(100vh-220px)] ">
            <div className="">
              {topStudents.map((student, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-costum-cream mb-2 p-3 rounded-xl"
                >
                  <span className="font-bold text-lg flex items-center">
                    <span>
                      {student.rank <= 3 ? (
                        <student.icon />
                      ) : (
                        `#${student.rank}`
                      )}
                    </span>
                    <span className="mx-2 font-normal">{student.name}</span>
                  </span>
                  <span className="font-bold">
                    {student.points} {t("points")}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
