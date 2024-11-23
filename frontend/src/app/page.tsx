'use client'
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const user = session?.user || { username: '', email: '' };
  if (!user.email) return;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {user?.email ? (
        <h1>Welcome back! {user?.email}</h1>
      ) : (
        <div>
          <h1>Welcome to the Personal Finance App</h1> 
        </div>
      )}
    </div>
  );
}