import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { getSession } from "next-auth/react";

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext({ req, res }: trpcNext.CreateNextContextOptions) {
  // for API-response caching see https://trpc.io/docs/caching
  const session = await getSession({ req });
  return { session };
}
