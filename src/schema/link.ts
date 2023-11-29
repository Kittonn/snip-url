import { z } from "zod";

export const CreateLinkSchema = z.object({
  url: z.string().url(),
  slug: z.string().min(1).max(6),
  description: z.string().optional(),
});

export const UpdateLinkSchema = z.object({
  url: z.string().url().optional(),
  slug: z.string().min(1).max(6).optional(),
  description: z.string().optional(),
});

export const DeleteLinkSchema = z.object({
  slug: z.string().min(1).max(6),
});

