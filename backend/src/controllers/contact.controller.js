export const submitContactForm = (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      message: "Nombre, email y mensaje son obligatorios.",
    });
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
};
