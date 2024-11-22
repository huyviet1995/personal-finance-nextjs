import prisma from "@/prisma/client";
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("🚀 ~ signupHandler ~ req:", body)
    const { username, password, email } = body;
    console.log("🚀 ~ POST ~ body:", body)
    if (!password || !email) {
      // retures.status(400).json({ message: "Email and password are required" });
      return NextResponse.json({ message: 'Email and password are required'}, { status: 400 });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json({ message: "Signup failed" }, { status: 500 });
  }
}