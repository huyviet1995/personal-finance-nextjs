'use client'
import React, { startTransition, useActionState} from "react";
import { AuthForm as LoginForm } from "@/components/forms/auth-form";
import { useRouter } from 'next/navigation'
import * as actions from '@/actions';

const LoginPage = () => {
  const router = useRouter();
  const [formState, formAction] = useActionState(actions.login, {
    jwt: "",
    user: {
      id: "",
      email: "",
    },
    errors: [],
  })

  const handleSubmit = (data: FormData) => {
    startTransition(() => {
      formAction(data);
    })
    router.push("/")
  }

  return (
      <LoginForm title="Login" buttonLabel="Login" onSubmit={handleSubmit} errors={formState.errors} />
  );
};

export default LoginPage;
