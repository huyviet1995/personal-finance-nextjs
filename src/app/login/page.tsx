import React from "react";
import { AuthForm as LoginForm } from "@/components/forms/auth-form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <main className="flex flex-row h-[100vh]">
      <section
        className="p-4 w-50"
      >
        <Image
          src="/images/illustration-authentication.svg"
          alt="hero-image"
          width={'500'}
          height={'400'}
          objectFit="cover"
          className="h-full rounded-lg w-50"
        />
      </section>
      <section
        className='flex flex-1 justify-center items-center'
      >
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
