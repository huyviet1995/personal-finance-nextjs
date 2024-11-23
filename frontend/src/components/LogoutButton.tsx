"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import clsx from "clsx";

type LogoutButtonProps = {
  className?: string;
  label?: string;
};

const LogoutButton = ({ className, label }: LogoutButtonProps) => {
  const classes = clsx("font-bold py-2 rounded", className);
  return (
    <Link
      href={"/"}
      className={classes}
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      {label ?? "Logout"}
    </Link>
  );
};

export default LogoutButton;
