import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kazi Arman | Front-end Developer",
  description: "This is kazi Arman's junior web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
