import { AppError } from "../utils/AppError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/sendSuccess.js";
import { createContactLead } from "../services/contact.service.js";
import { contactSchema } from "../validators/contact.validator.js";
import { logger } from "../utils/logger.js";

export const submitContactForm = asyncHandler(async (req, res) => {
  // Validate at the HTTP boundary so downstream layers receive trusted data.
  const parsedData = contactSchema.safeParse(req.body);

  if (!parsedData.success) {
    const firstErrorMessage =
      parsedData.error.issues[0]?.message || "Datos de formulario no válidos.";

    throw new AppError(firstErrorMessage, 400);
  }

  const { name, email, company, message } = parsedData.data;

  // Keep detailed payload logging out of production to reduce sensitive data exposure.
  if (process.env.NODE_ENV !== "production") {
    logger.info(
      {
        name,
        email,
        company,
        message,
        timestamp: new Date().toISOString(),
      },
      "New contact form submission received",
    );
  }

  // Delegate persistence and notification side effects to the service layer.
  const contact = await createContactLead({
    name,
    email,
    company,
    message,
  });

  return sendSuccess(res, {
    statusCode: 201,
    message: "Mensaje recibido. Nos pondremos en contacto contigo en la mayor brevedad posible.",
    data: {
      id: contact._id,
      name: contact.name,
      email: contact.email,
      company: contact.company,
      message: contact.message,
      createdAt: contact.createdAt,
    },
  });
});
