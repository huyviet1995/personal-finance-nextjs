import { signIn } from "next-auth/react";

export async function login(formState: any, formData: FormData): Promise<boolean> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    const response = await signIn(`credentials`, {
      redirect: false,
      email, 
      password
    });

    if (response?.error) {
      throw new Error("Login failed");
    }

    return true;

  } catch (error) {
    console.error("Error during login:", error);
    return false;
  }
}

