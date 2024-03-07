"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import createClient from "../../../../utils/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the shape of the login form data
const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type content = {
  email: string;
  password: string;
  email_label: string;
  password_label: string;
  error_message_email: string;
  error_message_password: string;
  submit: string;
};

type Props = {
  params: {
    locale: string;
    content: content;
  };
};

const LoginForm = ({ params: { locale, content } }: Props) => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "user1@example.com",
      password: "password",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    const client = createClient();

    const { data, error } = await client.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: error.message,
      });
      return;
    }

    if (data) {
      toast({
        title: "Success",
        description: "SignIn success",
      });
      router.push(`/${locale}/dashboard`);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
        <FormField
          control={form.control}
          name="email"
          defaultValue={form.getValues("email")}
          render={({ field }) => (
            <FormItem className="md:w-full">
              <FormLabel>{content.email}</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder={content.email_label}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          defaultValue={form.getValues("password")}
          render={({ field }) => (
            <FormItem className="md:w-full">
              <FormLabel>{content.password}</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder={content.password_label}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-center">
          <Button
            type="submit"
            className="bg-[#0F172A] w-full hover:bg-[#FFE7C2] hover:text-[#0F172A]  rounded-xl"
          >
            {content.submit}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
