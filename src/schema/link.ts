import { z } from "zod";

export const CreateLinkSchema = z.object({
  url: z.string().url(),
  slug: z.string().min(1).max(6),
  description: z.string().optional(),
});
