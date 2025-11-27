import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GenResume",
    template: "%s | GenResume",
  },
  description:
    "AI powered resume builder - create professional resumes in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
