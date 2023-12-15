"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/trpc/react";
import { SlidersHorizontal } from "lucide-react";
import { Link } from "@prisma/client";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import EditDialog from "./EditDialog";

export default function LinkSetting(link: Link) {
  const { toast } = useToast();
  const { refresh } = useRouter();
  const { mutate } = api.link.deleteLink.useMutation({
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Link deleted successfully.",
        duration: 3000,
      });
      refresh();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    },
  });

  const onDelete = () => {
    mutate(link);
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-4">
          <SlidersHorizontal className="h-[18px] w-[18px]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <DialogTrigger>Edit</DialogTrigger>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onDelete}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <EditDialog {...link} />
    </Dialog>
  );
}
