import { Contact } from "../models/Contact.js";
import { sendNewLeadNotification } from "./email.service.js";

export const createContactLead = async ({ name, email, company, message }) => {
  const contact = await Contact.create({
    name,
    email,
    company: company || "",
    message,
  });

  try {
    await sendNewLeadNotification({
      name,
      email,
      company,
      message,
    });
  } catch (error) {
    console.error("Error al enviar notificación de nuevo lead:", error);
  }

  return contact;
};
