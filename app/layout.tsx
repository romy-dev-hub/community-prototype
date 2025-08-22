import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Community Website",
  description: "A community hub built with Next.js and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}