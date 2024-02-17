"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";

type content = {
  email: string;
  password: string;
  confirm_password: string;
  email_label: string;
  password_label: string;
  confirm_password_label: string;
  error_message_email: string;
  error_message_password: string;
  error_message_confirm_password: string;
  back: string;
  next: string;
  go: string;
};

type Props = {
  params: {
    locale: string;
    content: content;
  };
};
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import createClient from "../../../../utils/supabase/client";
import { useState } from "react";

const RegisterForm = ({ params: { locale, content } }: Props) => {
  const formSchema = z.object({
    email: z.string().min(6, {
      message: content.error_message_email,
    }),
    password: z.string().min(8, {
      message: content.error_message_password,
    }),
    confirm_password: z.string().min(8, {
      message: content.error_message_confirm_password,
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "test@gmail.com",
      password: "12345678",
      confirm_password: "12345678",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const client = createClient();

    if (values.password !== values.confirm_password) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Password and confirm password are not the same",
      });
      return;
    }
    setLoading(true);
    const { data, error } = await client.auth.signUp({
      email: values.email,
      password: values.password,
    });
    setLoading(false);
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
        description: "Register success",
      });
      router.push(`/${locale}/register/info`);
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
                  type="password"
                  placeholder={content.password_label}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirm_password"
          defaultValue={form.getValues("confirm_password")}
          render={({ field }) => (
            <FormItem className="md:w-full">
              <FormLabel>{content.confirm_password}</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  type="password"
                  placeholder={content.confirm_password_label}
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
            className="bg-[#0F172A] w-full hover:bg-[#FFE7C2] hover:text-[#0F172A]"
          >
            {loading && (
              <ReloadIcon className="mx-2 h-4 w-4 animate-spin  hover:text-[#0F172A]" />
            )}
            {`${content.next}`}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
