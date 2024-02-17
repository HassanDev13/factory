  import Image from 'next/image';
  import { useTranslations } from "next-intl";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import Link from 'next/link';
import LoginForm from './form';

type Props = {
  params: {
    locale: string;
  };
};


  export default function Home({ params: { locale } }: Props) {
      const t = useTranslations("login");

    return (
      <div className="flex flex-col md:flex-row max-sm:items-center md:h-screen md:w-screen max-sm:justify-center ">

        <div className=' md:w-1/2 md:bg-dark-blue flex items-center justify-center'>

          <div className="mt-4 md:order-last md:w-auto ">
            <Image
              src="/desktopFactory.svg"
              className="max-md:hidden"
              alt="desktop"
              width={300}
              height={300}
            />
            <Image
              src="/mobilefactory.svg"
              className="md:hidden ml-[15%]"
              alt="mobile"
              width={200}
              height={300}
            />
            <div className="text-center mt-4">
              <p className="text-md md:text-costum-cream">
                <b>
                  {t('slogenPart1')}
                </b> 
                {t('slogenPart2')}
                 </p>
            </div>
          </div>

        </div>


        <div className="flex flex-col items-center justify-center md:order-first md:w-1/2 ">
          <Card className="border-none md:w-[60%] mt-[10%]">
            <CardHeader>
              <p className='text-3xl '>{t('welcome')} <b className='md:hidden'>{t('back')}</b></p>
              <CardTitle className='md:text-4xl max-sm:hidden '>{t('back')}</CardTitle>
              <CardDescription className='md:hidden'>{t('enter-your-email-below-to-create-your-account')}</CardDescription>
            </CardHeader>
            <CardContent>
            
              <LoginForm
                 params={{
                locale,
                content: {
                  email: t("email"),
                  password: t("password"),
                  email_label: t("email_label"),
                  password_label: t('password'),
                  error_message_email: t("error_message_email"),
                  error_message_password: t("error_message_password"),
                  submit: t("submit"),
                },
              }}
              
              />
            </CardContent>
            <CardFooter>
              <p className="text-custom-gray flex items-center justify-center w-full" >{t('already-have-an-account')} <Link className="text-custom-gray font-bold" href="#">{t('click-here-0')}</Link></p>
            </CardFooter>
          </Card>
          <div>
            <footer className="text-custom-gray text-sm mt-8 text-center">
            <p className=""> <b className='font-bold'>{t('mbadrh')}</b>{t('hna-ytkhrj-alqadh')} </p>
            <p ><b className="font-bold"></b> {t('initiativePart2')}</p>
          </footer>
          </div>
          
        </div>

      </div>

    );
  }
