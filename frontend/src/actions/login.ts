"use server";

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    // Assuming the API returns a token on successful login
    if (data.token) {
      localStorage.setItem("token", data.token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error during login:", error);
    return false;
  }
}

