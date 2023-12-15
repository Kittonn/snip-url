"use client";

import { nanoid } from "nanoid";
import { RefreshCcw, Plus } from "lucide-react";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateLinkSchema } from "@/schema/link";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "../ui/use-toast";

export default function CreateLinkForm() {
  const { push, refresh } = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof CreateLinkSchema>>({
    resolver: zodResolver(CreateLinkSchema),
    defaultValues: {
      url: "",
      slug: "",
      description: "",
    },
  });

  const { mutate } = api.link.createLink.useMutation({
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Link created successfully.",
        duration: 3000,
      });

      push("/dashboard");
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

  const onSubmit = (values: z.infer<typeof CreateLinkSchema>) => {
    mutate(values);
  };

  const generateSlug = async () => {
    const slug = nanoid(6);
    form.setValue("slug", slug);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Enter the URL:</FormLabel>
              <FormControl>
                <Input {...field} placeholder="https://example.com" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Custom Slug:</FormLabel>
              <FormDescription>
                http://localhost:3000/s/{form.watch("slug")}
              </FormDescription>
              <div className="flex flex-col gap-3 sm:flex-row">
                <FormControl>
                  <Input {...field} placeholder="Custom Slug" />
                </FormControl>
                <Button type="button" onClick={generateSlug} className="w-fit">
                  <RefreshCcw className="mr-2 h-5 w-5" />
                  Generate Slug
                </Button>
              </div>
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

        <Button type="submit" className="mt-4">
          <Plus className="mr-2 h-5 w-5" />
          Create
        </Button>
      </form>
    </Form>
  );
}
