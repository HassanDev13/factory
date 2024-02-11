import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import Form1 from "./form1";
import { useTranslations } from "next-intl";

type Props = {
  params: { locale: string; step: number };
};

const RegisterForm = ({ params: { locale, step } }: Props) => {
  const t = useTranslations("Register");

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>{t("register")}</CardTitle>
          <CardDescription>{t("create-your-account")}</CardDescription>
        </CardHeader>
        <CardContent>
          {step == 1 && (
            <Form1
              params={{
                locale,
                step,
                content: {
                  email: t('email'),
                  password: t('password'),
                  confirm_password: t('confirm-password'),
                  first_name: t('first-name-0'),
                  last_name: t('last-name-0'),
                  gender: t('gender'),
                  email_label: t('email-0'),
                  password_label: t('password'),
                  confirm_password_label: t('confirm-password-0'),
                  first_name_label: t('first-name-1'),
                  last_name_label: t('last-name-1'),
                  gender_label: t('gender-0'),
                  error_message_email: t('email-not-provides'),
                  error_message_password: t('password-not-provides'),
                  error_message_confirm_password:
                    t('confirm-password-not-provides'),
                  error_message_first_name: t('first-name-not-provides'),
                  error_message_last_name: t('last-name-not-provides'),
                  error_message_gender: t('gender-not-provides'),
                  back: t('back'),
                  next: t('next'),
                  go: t('go'),
                },
              }}
            />
          )}
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
    </div>
  );
};
export default RegisterForm;
