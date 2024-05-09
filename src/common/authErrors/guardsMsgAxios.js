export function guardMsgAxios(error) {
  return {
    message: error.response.data?.message || "Error al iniciar sesión",
    cuantity:
      typeof error.response.data?.message === "string"
        ? 1
        : error.response.data?.message.length,
  };
}
