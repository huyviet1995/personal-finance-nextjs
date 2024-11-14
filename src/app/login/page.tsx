import React from "react";
import { AuthForm as LoginForm } from "@/components/forms/auth-form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <section
        className="p-4 h-full"
      >
        <Image
          src="/images/illustration-authentication.svg"
          alt="hero-image"
          width={'500'}
          height={'100'}
          className="h-full w-auto rounded-lg"
        />
      </section>
      <section
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
