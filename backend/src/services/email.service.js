import { Resend } from "resend";
import { env } from "../config/env.js";

const resend = new Resend(env.resendApiKey);

export const sendNewLeadNotification = async ({
  name,
  email,
  company,
  message,
}) => {
  const subject = `Nuevo lead recibido desde Entire Studio: ${name}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2>Nuevo formulario recibido</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Empresa:</strong> ${company || "No especificada"}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    </div>
  `;

  const result = await resend.emails.send({
    from: env.fromEmail,
    to: env.notificationEmail,
    subject,
    html,
  });

  return result;
};
