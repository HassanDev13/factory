
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Form1 from "./form";
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";
import createClient from "../../../../../utils/supabase/actions";
import { Tables } from "../../../../../utils/database.types";

type Props = {
  params: { locale: string; };
};

export default  function Home({ params: { locale } }: Props) {
  const t = useTranslations("Register");
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase.from("country").select("*").returns< Tables<'country'>[]>();
 
  return (
    <main className="flex min-h-screen md:max-h-screen flex-col justify-center space-y-6 p-10 md:p-24 bg-background  lg:px-72">
      <h1 className="text-5xl text-start">{t('lets-start')} <span className="font-bold">{t('the-journey')}</span></h1>
     
      <Card>
        <CardHeader>
          <CardTitle>{t("register")}</CardTitle>
          <CardDescription>{t("create-your-account")}</CardDescription>
        </CardHeader>
        <CardContent>
          {
            data &&  <Form1
            params={{
              country: data,
              locale,
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
          }
         
        </CardContent>
        <CardFooter>
        
        </CardFooter>
      </Card>
     
    </main>
  );
}
