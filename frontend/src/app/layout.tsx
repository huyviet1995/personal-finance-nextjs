'use client'
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Sidebar } from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname();

  const pageTitle = useMemo(() => {
    switch (pathName) {
      case "/overview":
        return "Overview";
      case "/transactions":
        return "Transactions";
      case "/budgets":
        return "Budgets";
      case "/pots":
        return "Pots";
      case "/recurring-bills":
        return "Recurring Bills";
      default:
        return "Overview";
    }
  }, [pathName]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-[100vw] h-[100vh] bg-gray-100 flex flex-row`}
      >
        <SessionProvider>
          <Sidebar />
          <main className="px-10 py-8 w-full overflow-auto h-full main-scrollbar">
            <h1 className={'p-2 font-bold text-gray-900 text-[32px] mb-8'}>{pageTitle}</h1>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
