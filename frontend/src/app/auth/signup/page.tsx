'use client';
import React, { startTransition } from "react";
import { useActionState } from "react";
import { AuthForm as SignupForm } from "@/components/forms/auth-form";
import * as actions from "@/actions";

const SignupPage = () => {
  const [formState, formActions] = useActionState(actions.signup, {
    token: "",
    user: {
      id: "",
      email: "",
    },
    errors: {
      email: "",
      password: "",
  }})

  const handleSubmit = (data: FormData) => {
    console.log(data);
    startTransition(() => {
      formActions(data);
    })
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
