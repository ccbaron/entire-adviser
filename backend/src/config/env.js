const {
  PORT,
  NODE_ENV,
  FRONTEND_URL,
  MONGODB_URI,
  RESEND_API_KEY,
  NOTIFICATION_EMAIL,
  FROM_EMAIL,
} = process.env;

if (!FRONTEND_URL) {
  throw new Error("Missing FRONTEND_URL environment variable");
}

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI environment variable");
}

if (!RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

if (!NOTIFICATION_EMAIL) {
  throw new Error("Missing NOTIFICATION_EMAIL environment variable");
}

if (!FROM_EMAIL) {
  throw new Error("Missing FROM_EMAIL environment variable");
}

export const env = {
  port: PORT || 4000,
  nodeEnv: NODE_ENV || "development",
  frontendUrl: FRONTEND_URL,
  mongodbUri: MONGODB_URI,
  resendApiKey: RESEND_API_KEY,
  notificationEmail: NOTIFICATION_EMAIL,
  fromEmail: FROM_EMAIL,
};
