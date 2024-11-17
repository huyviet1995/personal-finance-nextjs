'use client';
import React, { startTransition } from "react";
import { useActionState } from "react";
import { AuthForm as SignupForm } from "@/components/forms/auth-form";
import * as actions from "@/actions";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const [formState, formActions] = useActionState(actions.signup, {
    jwt: "",
    user: {
      id: "",
      email: "",
    },
    errors: {
      email: "",
      password: "",
  }})

  const handleSubmit = (data: FormData) => {
    startTransition(() => {
      formActions(data);
    })
    router.push('/')
  }

  return (
      <SignupForm 
        title="Sign Up" 
        buttonLabel="Create Account" 
        onSubmit={handleSubmit}
        errors={formState.errors}
      />
  );
};

export default SignupPage;
