"use client";

import { BiLogoGmail } from "react-icons/bi";
import { signIn } from "next-auth/react";

export default async function Auth() {
  const handleSignIn = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/dashboard",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Welcome 👋</h1>
      <button onClick={handleSignIn}>
        <BiLogoGmail />
        Sign in with Gmail
      </button>
    </main>
  );
}
