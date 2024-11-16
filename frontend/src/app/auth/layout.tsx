import React from "react";
import Image from "next/image";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex-grow flex flex-row max-h-[100vh]">
      <section className="relative p-4">
        <Image
          src="/images/illustration-authentication.svg"
          alt="hero-image"
          width={'500'}
          height={'400'}
          objectFit="cover"
          className="h-full w-full rounded-lg w-50 object-cover"
        />
        <div className="absolute p-4 bottom-10 w-full h-full flex flex-col justify-end items-center text-white">
          <h1 className="text-[32px] font-bold">Keep track of your money and save for your future</h1>
          <p className="text-xl mt-2">
            Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </section>
      <section className='flex flex-1 justify-center items-center'>
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
