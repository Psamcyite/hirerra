/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // Mark this component as a Client Component

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import logo from "@/assets/hirerra.png";
import { useRouter } from "next/navigation"; // Client-side navigation
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  const router = useRouter();

  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt="logo" />
          <span className="text-xl font-bold tracking-tight">Hirerra</span>
        </Link>

        <div className="flex items-center gap-3">
          <SignedIn>
            <Button asChild>
              <Link href="/jobs/new">Post a job</Link>
            </Button>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
