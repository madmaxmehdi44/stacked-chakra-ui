import { Context } from "./context";
import * as trpc from "@trpc/server";
import superjson from "superjson";
/**
 * Helper function to create a router with context
 */
export function createRouter() {
  return trpc.router<Context>().transformer(superjson);
}
