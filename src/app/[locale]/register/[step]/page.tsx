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
  const steps = [1, 2, 3];
  return (
    <main className="flex min-h-screen md:max-h-screen flex-col justify-center space-y-6 px-10 md:p-24 bg-background">
      <h1 className="text-5xl text-start">{t('lets-start')} <span className="font-bold">{t('the-journey')}</span></h1>
      <div className="flex items-start">
        <div className="flex items-start space-x-6 rtl:space-x-reverse">
          {steps.map((cStep, index) => (
            <div key={index}>
              <Link
                href={`/${locale}/register/${cStep}`}
                className={`flex items-center rounded-full h-10 w-10 justify-center   ${
                  cStep === Number(step)
                    ? "text-white bg-foreground font-bold "
                    : "bg-slate-500 text-gray-400"
                } `}
              >
                <span className="text-2xl items-center ">{cStep}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <RegisterForm params={{locale , step}} />
     
    </main>
  );
}
