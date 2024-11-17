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
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Signup failed");
    }

    const data = await response.json();
    if (data.jwt) {
      // Sign in the user after successful registration
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));
      return { jwt: data.jwt, user: data.user };
    } else {
      return { errors: data.errors };
    }
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
}
