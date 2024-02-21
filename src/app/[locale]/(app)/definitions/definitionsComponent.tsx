import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  HashIcon,
  MapPinIcon,
  ShapesIcon,
  UsersIcon,
} from "lucide-react";
import { Link } from "@/config/navigation";
import { useTranslations } from "next-intl";

const Definitions = () => {
  const t = useTranslations("definitions");

  const cards = [
    {
      icon: ShapesIcon,
      link: "/initiatives-types",
      title: t("initiatives-types"),
    },
    { icon: CheckCircle, link: "/tasks-types", title: t("tasks-types") },
    { icon: HashIcon, link: "/task-tags", title: t("tasks-tags") },
    { icon: UsersIcon, link: "/teams", title: t("teams") },
    { icon: MapPinIcon, link: "/country", title: t("country") },
    { icon: Clock, link: "/time-zones", title: t("time-zones") },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-5 p-5 ">
      {cards.map((card, index) => (
        <Link href={card.link} key={index}>
          <div>
            <Card className="bg-white transition-colors duration-500 hover:bg-costum-cream py-5">
              <CardContent className="flex flex-col items-center justify-center space-y-2  h-full p-0">
                <div>
                  <card.icon className="size-16 " />
                </div>
                <p>{card.title} </p>
              </CardContent>
            </Card>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Definitions;
