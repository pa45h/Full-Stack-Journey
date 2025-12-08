"use client";

import { UserButton } from "@clerk/nextjs";
import { CreditCard, FileUser, Home, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../icon.svg";

function Navbar() {
  return (
    <header className="shadow-sm">
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
        <Link
          href="/"
          className="group flex w-fit cursor-pointer items-center gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white opacity-50 blur-xl" />
            <div className="relative bg-white p-3">
              <Sparkles className="h-7 w-7 text-black" />
            </div>
          </div>
          <span className="text-3xl font-black tracking-tighter">
            Gen<span className="text-white/70">Resume</span>
          </span>
        </Link>
        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 p-1">
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  width: 45,
                  height: 45,
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Home"
                labelIcon={<Home className="size-4" />}
                href="/"
              />
              <UserButton.Link
                label="Resumes"
                labelIcon={<FileUser className="size-4" />}
                href="/resumes"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
