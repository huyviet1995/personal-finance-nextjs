'use client'
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Home() {
  const [user] = useLocalStorage('user', { username: '' });
  if (!user.username) return;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {user?.username ? (
        <h1>Welcome back! {user?.username}</h1>
      ) : (
        <div>
          <h1>Welcome to the Personal Finance App</h1> 
        </div>
      )}
    </div>
  );
}