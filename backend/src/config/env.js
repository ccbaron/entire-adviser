const { PORT, NODE_ENV, FRONTEND_URL, MONGODB_URI } = process.env;

if (!FRONTEND_URL) {
  throw new Error("Missing FRONTEND_URL environment variable");
}

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI environment variable");
}

console.log('DEBUG process.env.PORT =>', PORT);

export const env = {
  port: PORT || 4000,
  nodeEnv: NODE_ENV || "development",
  frontendUrl: FRONTEND_URL,
  mongodbUri: MONGODB_URI,
};
