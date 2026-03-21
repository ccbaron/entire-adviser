import { logger } from "../utils/logger.js";

export const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";

  logger.error(
    {
      err: error,
      method: req.method,
      url: req.originalUrl,
      statusCode,
    },
    "Request error",
  );

  res.status(statusCode).json({
    ok: false,
    message,
  });
};
