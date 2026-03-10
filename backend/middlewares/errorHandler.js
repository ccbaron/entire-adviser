export const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";

  if (process.env.NODE_ENV !== "production") {
    console.error("Error:", error);
  }

  res.status(statusCode).json({
    ok: false,
    message,
  });
};
