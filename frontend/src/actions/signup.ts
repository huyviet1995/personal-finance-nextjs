  export interface SignupResponse {
    token?: string;
    user?: {
      id: string;
      email: string;
    };
    errors?: {
      email: string;
      password: string;
    }
  }
export async function signup(formState: SignupResponse, formData: FormData): Promise<SignupResponse> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email: email, 
        password: password 
       }),
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    const data = await response.json();
    // Assuming the API returns a token on successful signup
    if (data.token) {
      localStorage.setItem("token", data.token);
      return data
    } else {
      return { errors: data.errors };
    }
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
}
