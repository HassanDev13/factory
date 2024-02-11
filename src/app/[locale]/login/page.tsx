"use client"
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import mobilefactory from '/mobilefactory.svg';
import desktopFactory from '/desktopFactory.svg';
import { useForm } from "react-hook-form";
import { object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { useState, useEffect } from 'react';

const schema = object({
  email: string().email(),
  password: string().min(6),
});

export default function Home() {
  const [imageSrc, setImageSrc] = useState('/mobilefactory.svg');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) { // MD breakpoint or larger
        setImageSrc('/desktopFactory.svg');
      } else {
        setImageSrc('/mobilefactory.svg');
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data : object) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col md:flex-row max-sm:items-center md:h-screen md:w-screen max-sm:justify-center ">

      <div className=' md:w-1/2 md:bg-dark-blue flex items-center justify-center'>

        <div className="mt-4 md:order-last md:w-auto ">
          <Image
            src={imageSrc}
            className=""
            alt="factory"
            width={300}
            height={300}
          />
          <div className="text-center mt-4">
            <p className="text-md md:text-costum-cream">
              <b>Factory-</b> In a mission to build a community
            </p>
          </div>
        </div>

      </div>


      <div className="flex flex-col items-center justify-center md:order-first md:w-1/2 ">
        <Card className="border-none md:w-[60%]">
          <CardHeader>
            <p className='md:text-3xl max-sm:mt-'>Welcome <b className='md:hidden'>Back</b></p>
            <CardTitle className='md:text-4xl max-sm:hidden '>Back</CardTitle>
            <CardDescription className='md:hidden'>Enter your email below to create your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <Label htmlFor="email">Email</Label>
                <Input {...register("email")} className="bg-white" id="email" placeholder="Email" />
                {errors.email && <p>{errors.email.message?.toString() }</p>}
                <Label className="text-custom-gray" htmlFor="email">Enter your email address</Label>
              </div>
              <div className="mt-4">
                <Label htmlFor="password">Password</Label>
                <Input type="password" {...register("password")} className="bg-white" id="password" placeholder="Password" />
                {errors.password && <p>{errors.password.message?.toString() }</p>}
                <Label className="text-custom-gray" htmlFor="password">Enter your password</Label>
              </div>
            <Button type="submit" className="w-full mt-[7%] bg-blue-950">Login</Button>
            </form>
          </CardContent>
          <CardFooter>
            <Label className="text-custom-gray ml-[5%] md:ml-[8%] text-lg" htmlFor="redirectRegister">Already have an account? <Link className="text-custom-gray font-bold" href="#">Click here</Link></Label>
          </CardFooter>
        </Card>
        <div>
          <footer className="text-custom-gray text-sm mt-8 text-center">
          <p className=""> <b className='font-bold'>مبادرة-</b>هنا يتخرج القادة </p>
          <p ><b className="font-bold">Initiative -</b> This is where leaders graduate</p>
        </footer>
        </div>
        
      </div>

    </div>

  );
}
