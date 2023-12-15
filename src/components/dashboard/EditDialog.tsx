import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Link } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UpdateLinkSchema } from "@/schema/link";
import { z } from "zod";
import { api } from "@/trpc/react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

export default function EditDialog(link: Link) {
  const { toast } = useToast();
  const { refresh, push } = useRouter();
  const form = useForm<z.infer<typeof UpdateLinkSchema>>({
    resolver: zodResolver(UpdateLinkSchema),
    defaultValues: {
      url: link.url,
      slug: link.slug,
      description: link.description as string,
    },
  });

  const { mutate } = api.link.updateLink.useMutation({
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Link updated successfully.",
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

  const onSubmit = (values: z.infer<typeof UpdateLinkSchema>) => {
    mutate(values);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit: /s/{link.slug}</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the URL:</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="https://example.com" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Description:</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Description" />
                </FormControl>
              </FormItem>
            )}
          />

          <DialogClose asChild>
            <Button type="submit" className="mt-4">
              Edit
            </Button>
          </DialogClose>
        </form>
      </Form>
    </DialogContent>
  );
}
