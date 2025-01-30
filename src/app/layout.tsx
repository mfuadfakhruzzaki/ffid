import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

// Import font Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  // weight: ["400", "500", "700"], // contoh jika ingin menambah style/weight
});

export const metadata: Metadata = {
  title: "Fuad Fakhruz",
  description: "Personal website of Fuad Fakhruz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
