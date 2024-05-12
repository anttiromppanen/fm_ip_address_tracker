import validator from "validator";

const validateIp = (ip: string) => {
  const isValidIp = validator.isIP(ip);
  const isValidUrl = validator.isURL(ip);

  return isValidIp || isValidUrl;
};

const isValidIpAddress = (ip: string) => validator.isIP(ip);

const isValidDomain = (domain: string) => validator.isURL(domain);

export { validateIp, isValidIpAddress, isValidDomain };
