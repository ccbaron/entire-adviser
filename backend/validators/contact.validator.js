import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(100, "El nombre no puede superar los 100 caracteres."),

  email: z
    .string()
    .trim()
    .email("Debes introducir un email válido.")
    .max(150, "El email no puede superar los 150 caracteres.")
    .transform((value) => value.toLowerCase()),

  company: z
    .string()
    .trim()
    .max(150, "La empresa no puede superar los 150 caracteres.")
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(2000, "El mensaje no puede superar los 2000 caracteres."),
});
