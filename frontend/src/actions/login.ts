export async function login(formState: any, formData: FormData): Promise<boolean> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        identifier: email,
        password,
       }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    // Assuming the API returns a token on successful login
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error during login:", error);
    return false;
  }
}

