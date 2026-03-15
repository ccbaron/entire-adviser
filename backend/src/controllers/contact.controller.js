import { AppError } from "../utils/AppError.js";
import { createContactLead } from "../services/contact.service.js";
import { contactSchema } from "../validators/contact.validator.js";

export const submitContactForm = async (req, res, next) => {
  try {
    const parsedData = contactSchema.safeParse(req.body);

    if (!parsedData.success) {
      const firstErrorMessage =
        parsedData.error.issues[0]?.message ||
        "Datos de formulario no válidos.";

      throw new AppError(firstErrorMessage, 400);
    }

    const { name, email, company, message } = parsedData.data;

    if (process.env.NODE_ENV !== "production") {
      console.log("📩 Nuevo formulario recibido:");
      console.log({
        name,
        email,
        company,
        message,
        timestamp: new Date().toISOString(),
      });
    }
    const contact = await createContactLead({
      name,
      email,
      company,
      message,
    });

    return res.status(201).json({
      ok: true,
      message: "Formulario recibido correctamente. Te contactaremos pronto.",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        company: contact.company,
        message: contact.message,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};
