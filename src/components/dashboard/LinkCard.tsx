"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Files } from "lucide-react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import LinkSetting from "./LinkSetting";
import { Link } from "@prisma/client";

export default function LinkCard(link: Link) {
  const { toast } = useToast();
  const copyToClipboard = () => {
    const copyLink = `http://localhost:3000/s/${link.slug}`;
    toast({
      title: "Copied to clipboard",
      description: copyLink,
      duration: 3000,
    });
    navigator.clipboard.writeText(copyLink);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div>
            /s/{link.slug}
            <Button
              variant={"ghost"}
              className="pl-0 hover:bg-transparent"
              onClick={copyToClipboard}
            >
              <Files className="ml-1 h-[18px] w-[18px]" />
            </Button>
          </div>
          <div>
            <LinkSetting {...link} />
          </div>
        </CardTitle>
        <CardDescription>{link.url}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{link.description}</p>
      </CardContent>
    </Card>
  );
}
