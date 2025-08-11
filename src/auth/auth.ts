import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { DrizzleDB } from "../database/Drizzle";

 
export const auth = betterAuth({
    database: drizzleAdapter(DrizzleDB, {
        provider: "pg"
    }),
});