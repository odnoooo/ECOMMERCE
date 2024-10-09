"use client";

import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/components/utils/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DataProvider } from "@/components/utils/dataProvider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // const isDashboard = pathname.includes("/dashboard");
  // const isUser = pathname.includes("/user");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {isDashboard ? (
          <DashboardHeader />
        ) : isUser ? (
          <UserHeader />
        ) : (
          <Header />
        )} */}
        <AuthProvider>
          <DataProvider>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
          </DataProvider>
        </AuthProvider>

        <ToastContainer />

        {/* {!isDashboard && <Footer />} */}
      </body>
    </html>
  );
}
