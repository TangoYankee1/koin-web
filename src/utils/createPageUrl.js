export const createPageUrl = (page) => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/${page}`;
};