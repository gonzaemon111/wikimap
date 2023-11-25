import { z } from 'zod';

const serverSchema = z.object({
  TZ: z.string(),
  AUTH0_SECRET: z.string().length(32),
  AUTH0_BASE_URL: z.string(),
  AUTH0_ISSUER_BASE_URL: z.string(),
  AUTH0_CLIENT_ID: z.string(),
  AUTH0_CLIENT_SECRET: z.string(),
});

export const serverEnv = {
  TZ: process.env.TZ ?? 'Asia/Tokyo',
  AUTH0_SECRET: process.env.AUTH0_SECRET,
  AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
  AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
};

// NOTE: Parseに失敗したらエラーがthrowされる
export const getServerEnv = serverSchema.parse(serverEnv);
