export const formatResponseErrorMsg = (err) => err instanceof Error
  ? err.response !== undefined
    ? err.response.data.message !== undefined
      ? err.response.data.message
      : err.response.statusText
    : err.message
  : err;
