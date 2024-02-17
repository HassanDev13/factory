import Image from "next/image";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { LayoutDashboard, LogOut, Siren } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  params: { locale: string };
  className?: string;
};

export default function NavBar({ params: { locale }, className }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <nav className={`${className}`}>
      <p>Factory</p>
     
       <Avatar >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
}
