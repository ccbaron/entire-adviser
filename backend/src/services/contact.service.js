import { Contact } from "../models/Contact.js";

export const createContactLead = async ({ name, email, company, message }) => {
  const contact = await Contact.create({
    name,
    email,
    company: company || "",
    message,
  });

  return contact;
};
