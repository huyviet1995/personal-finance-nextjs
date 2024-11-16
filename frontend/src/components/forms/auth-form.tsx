"use client";
import React from "react";
import { Spacer } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input, Button } from "@/components/ui";
import { z } from "zod";

type AuthFormProps = {
  title: string;
  buttonLabel: string;
};

const authFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type AuthFormData = z.infer<typeof authFormSchema>;

export const AuthForm = ({ title, buttonLabel }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authFormSchema),
    mode: "onBlur",
  });

  // Handlers
  const onSubmit = (data: AuthFormData) => {
    console.log(data);
    const validationErrors = authFormSchema.safeParse(data);
    if (validationErrors.success) {
      console.log("Form is valid, submit data");
    }
  };

  return (
    <div className="p-8 bg-white min-w-[560px]">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-gray-900 text-[2rem]">{title}</h1>
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          {...register("email", { required: "Email is required" })}
          errorMessage={errors.email?.message}
          isInvalid={!!errors.email}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          {...register("password")}
          errorMessage={errors.password?.message || ""}
          isInvalid={!!errors.password}
        />
        <Spacer y={1.5} />
        <Button
          title={buttonLabel}
          className={"rounded-sm bg-gray-900"}
        />
      </form>
    </div>
  );
};
