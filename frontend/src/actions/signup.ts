import { HTTP_METHODS } from "@/utils/constants";
import { signIn } from "next-auth/react";

export interface SignupResponse {
  jwt?: string;
  user?: {
    id: string;
    email: string;
  };
  errors?: {
    email: string;
    password: string;
  };
}

export async function signup(formState: any, formData: FormData): Promise<SignupResponse> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await fetch('/api/auth/signup', {
      method: HTTP_METHODS.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response?.ok) {
      throw new Error('Signup failed');
    }

    const data = await response.json();

    const { jwt, user } = data;
    // sign the user in
    const signInResp = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (signInResp?.error) {
      throw new Error('Login failed');
    }

    return {
      jwt,
      user,
    };
  } catch (error) {
    return {
      errors: {
        email: "Email might already be taken",
        password: "Password is invalid",
      },
    };
  }
}
