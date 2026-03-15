import rateLimit from "express-rate-limit";

export const contactFormRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    message:
      "Has enviado demasiadas solicitudes en poco tiempo. Inténtalo de nuevo más tarde.",
  },
});
