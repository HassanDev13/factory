import { db } from "../../../../db/db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  users: publicProcedure.query(async ({ ctx }) => {
    const result = await db.query.users.findMany({
      with: {
        country: true,
      },
    });
    return result;
  }),
});
