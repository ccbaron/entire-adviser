const { PORT, NODE_ENV, FRONTEND_URL } = process.env;

if (!FRONTEND_URL) {
  throw new Error("Missing FRONTEND_URL environment variable");
}

export const env = {
  port: PORT || 3000,
  nodeEnv: NODE_ENV || "development",
  frontendUrl: FRONTEND_URL,
};
