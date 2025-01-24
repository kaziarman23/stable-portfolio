import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/page";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Kazi Arman | Front-end Developer",
  description: "This is kazi Arman's junior web developer portfolio",
};

// RESUME:
// https://drive.google.com/file/d/15pPxqmC67jtPCTEbCG5xMKKBSbP71SMn/view?usp=sharing

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
