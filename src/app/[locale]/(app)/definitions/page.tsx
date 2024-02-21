import Image from "next/image";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Definitions from "./definitionsComponent";

type Props = {
  params: { locale: string };
};


export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div>
      <Definitions />    
    </div>
  );
}