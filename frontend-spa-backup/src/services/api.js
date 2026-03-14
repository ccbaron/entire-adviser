import { env } from "../config/env.js";

export const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${env.apiUrl}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || "API request failed");
  }

  return data;
};
