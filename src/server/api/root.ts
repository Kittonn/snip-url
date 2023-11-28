import { linkRouter } from "@/server/api/routers/link";
import { createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  link: linkRouter,
});

export type AppRouter = typeof appRouter;
