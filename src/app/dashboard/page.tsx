"use client";

import { signOut } from "next-auth/react";

export default async function Dashboard() {
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <main>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </main>
  );
}
