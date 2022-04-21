import { ZodError } from "zod";
import { createRouter } from "../createRouter";

export const appRouter = createRouter()
  .formatError(({ shape, error }) => {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  })
  .query("healthcheck", {
    async resolve() {
      return;
    },
  });
//
// your routes here
// example given
/*
    .merge("post.", postRouter)
    .merge("category.", categoryRouter)
    .merge("suggestion.", suggestionRouter)
  */

export type AppRouter = typeof appRouter;
