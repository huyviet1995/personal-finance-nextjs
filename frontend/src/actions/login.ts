"use server";

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_APP_URL}`, {
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
      localStorage.setItem("user", data.user);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error during login:", error);
    return false;
  }
}

