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

const cards = [
  { icon: ShapesIcon, link: "", title: "Initiatives types" },
  { icon: CheckCircle, link: "", title: "Tasks types" },
  { icon: HashIcon, link: "", title: "Tasks tags" },
  { icon: UsersIcon, link: "", title: "Teams" },
  { icon: MapPinIcon, link: "", title: "country" },
  { icon: Clock, link: "", title: "Time-zones" },
];

const Definitions = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5 p-5">
      {cards.map((card, index) => (
        <Link href={card.link} key={index}>
          <div>
            <Card className="bg-white transition-colors duration-500 hover:bg-costum-cream py-5">
              <CardContent className="flex flex-col items-center justify-center">
                <div>
                  <card.icon className="size-16" />
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
