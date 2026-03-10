import { AppError } from "../utils/AppError.js";

export const submitContactForm = (req, res, next) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      throw new AppError("Nombre, email y mensaje son obligatorios.", 400);
    }

    return res.status(200).json({
      ok: true,
      message: "Formulario recibido correctamente. Te contactaremos pronto.",
      data: {
        name,
        email,
        company,
        message,
      },
    });
  } catch (error) {
    next(error);
  }
};
