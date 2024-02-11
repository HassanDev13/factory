import Image from "next/image";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import RegisterForm from "./forms";


type Props = {
  params: { locale: string; step: number };
};

export default function Home({ params: { locale, step } }: Props) {
  
  const t = useTranslations("Register");

  return (
    <main className="flex min-h-screen md:max-h-screen flex-col justify-center space-y-6 p-10 md:p-24 bg-background  lg:px-72">
      <h1 className="text-5xl text-start">{t('lets-start')} <span className="font-bold">{t('the-journey')}</span></h1>
     
      <RegisterForm params={{locale , step}} />
     
    </main>
  );
}
