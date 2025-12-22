import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().int().positive("PORT must be positive"),
  MONGO_URI: z.string().url("Invalid MONGO_URI"),
  DB_NAME: z.string().min(1, "DB_NAME is required")
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables");
  console.error(parsedEnv.error.format());
  process.exit(1);
}

export const { PORT, MONGO_URI, DB_NAME } = parsedEnv.data;
