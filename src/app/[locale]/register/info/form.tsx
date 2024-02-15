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
    content: content; 
  };
};
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import createClient from "../../../../../utils/supabase/client";
import { Tables } from "../../../../../utils/database.types";
import { useQuery } from "@tanstack/react-query";
import useGetAllCountries from "../../../../../hooks/country/use-all-countries";

const Form1 = ({ params: { locale, content } }: Props) => {
  const client = createClient();
  const { data: country, isLoading : countryLoading , isError } = useGetAllCountries();
  const formSchema = z.object({
    first_name: z.string().min(6, {
      message: content.error_message_first_name,
    }),
    last_name: z.string().min(6, {
      message: content.error_message_last_name,
    }),
    gender: z
      .enum(["men", "female"])
      .refine((value) => ["men", "female"].includes(value), {
        message: content.error_message_gender,
      }),
    country: z.number().refine((value) => !isNaN(value), {
      message: content.error_message_gender,
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "hacene",
      last_name: "zerrouk",
      gender: "men",
      country: 1,
    },
  });
 
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  
    const user = await client.auth.getUser();
    if (!user || user.data === null || user.data.user === null) {
      router.push(`/${locale}/register`);
    }
    const { data, error } = await client
      .from("users")
      .upsert({
        first_name: values.first_name,
        last_name: values.last_name,
        gender: values.gender,
        country_id: values.country,
        user_id: user!.data!.user!.id,
      })
      .select("*");

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
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
        <div className="md:flex w-full  md:justify-between md:space-x-4 space-y-5 md:space-y-0 rtl:space-x-reverse">
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
        </div>
        <div className="md:flex w-full md:justify-between md:space-x-4 space-y-5 md:space-y-0 rtl:space-x-reverse">
          <FormField
            control={form.control}
            name="country"
            defaultValue={form.getValues("country")}
            render={({ field }) => (
              <FormItem className="md:w-full ">
                <FormLabel>{content.gender}</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  defaultValue={String(field.value)}
                >
                  <FormControl className="bg-white">
                    <SelectTrigger>
                      <SelectValue placeholder={content.gender_label} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>

                    {country?.map((c) => (
                      <SelectItem key={c.id} value={`${c.id}`}>
                        {c.name}
                      </SelectItem>
                    ))}
                  
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
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
                    <SelectItem value="men">Man - دكر</SelectItem>
                    <SelectItem value="female">Women - أنثى</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center justify-start">
          <Button
            type="submit"
            className="bg-[#0F172A] w-full md:w-32 hover:bg-[#FFE7C2] hover:text-[#0F172A]"
          >
            <ReloadIcon className="mx-2 h-4 w-4 animate-spin  hover:text-[#0F172A]" />
            {`${content.next}`}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default Form1;
