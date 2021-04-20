const objectToQueryParams = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};

module.exports = { objectToQueryParams };
