export const sendSuccess = (
  res,
  {
    statusCode = 200,
    message = "Operación completada correctamente.",
    data = null,
  } = {},
) => {
  return res.status(statusCode).json({
    ok: true,
    message,
    data,
  });
};
