import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { NextAuthProvider } from "@/components/SessionProvider";
import { Suspense } from "react";
import Navbar from "@/components/navbars/Navbar";
import Loader from "@/components/ui/Loader";
import getCurrentUser from "@/lib/actions/getCurrentUser.action";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
        <Toaster/>
        <LoginModal/>
        <RegisterModal/>
        <Suspense fallback={<Loader/>}>
          <Navbar user={currentUser}/>
        </Suspense>
        {children}
        </NextAuthProvider>
        </body>
    </html>
  );
}
