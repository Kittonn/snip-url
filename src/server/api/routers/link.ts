import {
  CreateLinkSchema,
  DeleteLinkSchema,
  UpdateLinkSchema,
} from "@/schema/link";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const linkRouter = createTRPCRouter({
  createLink: protectedProcedure
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
  getLinks: protectedProcedure.query(({ ctx }) => {
    return ctx.db.link.findMany({
      where: { owner: { id: ctx.session.user.id } },
    });
  }),
  deleteLink: protectedProcedure
    .input(DeleteLinkSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.link.delete({
        where: { slug: input.slug, ownerId: ctx.session.user.id },
      });
    }),
  updateLink: protectedProcedure
    .input(UpdateLinkSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.link.update({
        where: { slug: input.slug, ownerId: ctx.session.user.id },
        data: {
          url: input.url,
          slug: input.slug,
          description: input.description,
        },
      });
    }),
});
