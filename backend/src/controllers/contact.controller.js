import { AppError } from "../utils/AppError.js";
import { createContactLead } from "../services/contact.service.js";

export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      throw new AppError("Nombre, email y mensaje son obligatorios.", 400);
    }

    // LOG PARA MONITORIZAR EL FORMULARIO
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
