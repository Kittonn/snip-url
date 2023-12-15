"use client";

import { signIn } from "next-auth/react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function SignInButton() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };
  return (
    <div className="mt-6">
      <Button
        loading={loading}
        loadingtext="Please wait"
        onClick={handleSignIn}
      >
        <Mail className="mr-2 h-6 w-6" />
        Sign in with Gmail
      </Button>
    </div>
  );
}
