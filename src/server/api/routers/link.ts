import { CreateLinkSchema } from "@/schema/link";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const linkRouter = createTRPCRouter({
  create: protectedProcedure
    .input(CreateLinkSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.link.create({
        data: {
          url: input.url,
          slug: input.slug,
          description: input.description,
          owner: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
  getAllLinks: protectedProcedure.query(({ ctx }) => {
    return ctx.db.link.findMany({
      where: { owner: { id: ctx.session.user.id } },
    });
  }),
});
