import { Contact } from "../models/Contact.js";
import { sendNewLeadNotification } from "./email.service.js";
import { logger } from "../utils/logger.js";

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

    logger.info(
      {
        contactId: contact._id,
        email,
      },
      "New lead notification sent successfully",
    );
  } catch (error) {
    logger.error(
      {
        err: error,
        contactId: contact._id,
        email,
      },
      "Error sending new lead notification",
    );
  }

  return contact;
};
