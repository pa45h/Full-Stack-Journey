"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "./ui/sonner";
import { dark, shadcn } from "@clerk/themes";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        {children}
        <Toaster richColors />
      </ClerkProvider>
    </ThemeProvider>
  );
}
