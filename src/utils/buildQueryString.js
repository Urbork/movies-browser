export const buildQueryString = (parameters, initialQueryString) => {
  const urlSearchParams = new URLSearchParams(initialQueryString);
  for (const key in parameters) {
    const value = parameters[key];
    if (value === undefined) {
      urlSearchParams.delete(key);
    } else {
      urlSearchParams.set(key, value);
    }
  }

  return urlSearchParams.toString();
};
