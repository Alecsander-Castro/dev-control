"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiLoader, FiLock, FiLogOut, FiUser } from "react-icons/fi";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const { status, data } = useSession();
  const handleLogin = async () => {
    await signIn();
  };
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header
      data-testid="header"
      className="w-full flex items-center px-2 py-4 shadow-sm"
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto ">
        <Link href="/">
          <h1
            data-testid="logo"
            className="font-bold text-2xl pl-1 hover:tracking-widest duration-300"
          >
            <span className="text-blue-500">DEV</span>
            CONTROL
          </h1>
        </Link>
        {status === "loading" && (
          <button className="animate-spin">
            <FiLoader size={26} color="#4b5563" />
          </button>
        )}
        {status === "unauthenticated" && (
          <button onClick={handleLogin}>
            <FiLock size={26} color="#4b5563" />
          </button>
        )}
        {status === "authenticated" && (
          <div className="flex items-baseline gap-4">
            <Link href={"/dashboard"}>
              <FiUser size={26} color="#4b5563" />
            </Link>
            <button onClick={handleLogout}>
              <FiLogOut size={26} color="#4b5563" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
