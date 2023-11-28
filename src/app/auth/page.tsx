"use client";

import { BiLogoGmail } from "react-icons/bi";
import { signIn } from "next-auth/react";

export default async function Auth() {
  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };
  return (
    <div>
      <h1>Welcome 👋</h1>
      <button onClick={handleSignIn}>
        <BiLogoGmail size={30} />
        Sign in with Google
      </button>
    </div>
  );
}
