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

type content = {
  email: string;
  password: string;
  confirm_password: string;
  first_name: string;
  last_name: string;
  gender: string;
  email_label: string;
  password_label: string;
  confirm_password_label: string;
  first_name_label: string;
  last_name_label: string;
  gender_label: string;
  error_message_email: string;
  error_message_password: string;
  error_message_confirm_password: string;
  error_message_first_name: string;
  error_message_last_name: string;
  error_message_gender: string;
  back: string;
  next: string;
  go: string;
};

type Props = {
  params: {
    locale: string;
    step: number;
    content: content;
  };
};
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Form1 = ({ params: { locale, step, content } }: Props) => {
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
    first_name: z.string().min(6, {
      message: content.error_message_first_name,
    }),
    last_name: z.string().min(6, {
      message: content.error_message_last_name,
    }),
    gender: z.string().min(3, {
      message: content.error_message_gender,
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "test@gmail.com",
      password: "12345678",
      confirm_password: "12345678",
      first_name: "hacene",
      last_name: "zerrouk",
      gender: "man",
    },
  });

  const router = useRouter();
  function back() {
    let stepCu = Number(step) - 1;
    router.push(`/${locale}/register/${stepCu}`);
  }
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    let stepCu = Number(step) + 1;
    router.push(`/${locale}/register/${stepCu}`);
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="md:flex w-[100%] md:justify-between md:space-x-4 space-y-5 md:space-y-0 rtl:space-x-reverse">
          <FormField
            control={form.control}
            name="first_name"
            defaultValue={form.getValues("first_name")}
            render={({ field }) => (
              <FormItem className="md:w-full">
                <FormLabel>{content.first_name}</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    placeholder={content.first_name_label}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            defaultValue={form.getValues("last_name")}
            render={({ field }) => (
              <FormItem className="md:w-full">
                <FormLabel>{content.last_name}</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    placeholder={content.last_name_label}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
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
        </div>
        <div className="md:flex w-full md:justify-between md:space-x-4 space-y-5 md:space-y-0 rtl:space-x-reverse">
          <FormField
            control={form.control}
            name="gender"
            defaultValue={form.getValues("gender")}
            render={({ field }) => (
              <FormItem className="md:w-full ">
                <FormLabel>{content.gender}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="bg-white">
                    <SelectTrigger>
                      <SelectValue placeholder={content.gender_label} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="man">Man - دكر</SelectItem>
                    <SelectItem value="Women">Women - أنثى</SelectItem>
                  </SelectContent>
                </Select>

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
                    placeholder={content.confirm_password_label}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="md:flex w-full md:justify-between md:space-x-4 space-y-5 md:space-y-0 rtl:space-x-reverse"></div>

        <div className="flex justify-between">
          <Button
            disabled={Number(step) == 1}
            className="bg-[#FFE7C2] w-32 text-foreground"
            onClick={() => {
              back();
            }}
          >
            {content.back}
          </Button>
          <Button type="submit" className="bg-[#0F172A] w-32">
            {Number(step) == 3 ? `${content.go}` : `${content.next}`}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default Form1;
