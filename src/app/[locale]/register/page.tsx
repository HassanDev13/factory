import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useTranslations } from "next-intl";
import RegisterForm from "./form";

type Props = {
  params: {
    locale: string;
  };
};
export default function Page({ params: { locale } }: Props) {
  const t = useTranslations("Register");
  return (
    <div className="flex flex-col md:flex-row max-sm:items-center min-h-screen  md:w-screen max-sm:justify-center ">
      <div className="hidden md:w-1/2 md:bg-dark-blue md:flex items-center justify-center">
        <div className="md:order-last md:w-auto space-y-4">
          <Image
            src="/desktopFactory.svg"
            className=""
            alt="factory"
            width={300}
            height={300}
          />
          <div className="text-center ">
            <p className="text-md md:text-costum-cream">
              <b>Factory-</b> In a mission to build a community
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:order-first md:w-1/2 space-y-3 m-6">
        <Image
          src="/mobilefactory.svg"
          className="md:hidden"
          alt="factory"
          width={200}
          height={300}
        />
        <Card className="border-none ">
          <CardHeader>
            <CardTitle className="text-4xl ">Register</CardTitle>
            <CardDescription className="">
              Enter your informations below to create your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm
              params={{
                locale,
                content: {
                  email: t("email"),
                  password: t("password"),
                  confirm_password: t("confirm-password"),
                  email_label: t("email-0"),
                  password_label: t('password'),
                  confirm_password_label: t("confirm-password-0"),
                  error_message_email: t("email-not-provides"),
                  error_message_password: t("password-not-provides"),
                  error_message_confirm_password: t("confirm-password-not-provides"),
                  back: t("back"),
                  next: t("next"),
                  go: t("go"),
                },
              }}
            />
          </CardContent>
          <CardFooter>
            <p className="flex items-center justify-center w-full">
              {t("already-have-account")}{" "}
              <Link className="font-bold" href="/examples/forms">
                {t("click-here")}
              </Link>
            </p>
          </CardFooter>
        </Card>
        <div>
          <footer className="text-custom-gray text-sm mt-8 text-center">
            <p className="">
              {" "}
              <b className="font-bold">مبادرة-</b>هنا يتخرج القادة{" "}
            </p>
            <p>
              <b className="font-bold">Initiative -</b> This is where leaders
              graduate
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
