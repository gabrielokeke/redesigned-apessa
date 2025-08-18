import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "APESSA",
  description: "Association pour l’Éducation, la Sexualité et la Santé en Afrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="flex min-h-screen flex-col">
        <Navbar /> 
        <main className="flex-grow-1 pt-[30px] lg:pt-[60px] ">{children}</main> 
        <Footer />
      </body>
    </html>
  );
}