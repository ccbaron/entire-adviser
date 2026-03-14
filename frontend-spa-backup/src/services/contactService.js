import { apiRequest } from "./api";

export const submitContactForm = async (formData) => {
  return apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};
