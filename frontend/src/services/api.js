const API_URL = import.meta.env.VITE_API_URL;

export const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
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
