'use client'

export default function Home() {
  const user = localStorage.getItem('user');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {user ? (
        <div>
          <h1>Welcome back, {user}!</h1>
        </div>
      ) : (
        <div>
          <h1>Welcome to the Personal Finance App</h1>
        </div>
      )}
    </div>
  );
}