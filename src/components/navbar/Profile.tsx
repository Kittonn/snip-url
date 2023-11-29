"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useToast } from "../ui/use-toast";

interface ProfileProps {
  name: string;
  image: string;
}

export default function Profile({ name, image }: ProfileProps) {
  const { toast } = useToast();
  const shortName = name.split(" ")[0];

  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while signing out.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <p className="hidden sm:block">{shortName}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/dashboard"}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/dashboard/create"}>Create New Link</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button type="button" onClick={handleSignOut}>
            Sign out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
