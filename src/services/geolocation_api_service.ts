import axios from "axios";

const { VITE_IP_API_KEY } = import.meta.env;

const getData = async () => {
  const res = await axios.get(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${VITE_IP_API_KEY}`,
  );
  return res.data;
};

const getDataByIp = async (ip: string) => {
  const res = await axios.get(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${VITE_IP_API_KEY}&ipAddress=${ip}`,
  );
  return res.data;
};

const getDataByDomain = async (domain: string) => {
  const res = await axios.get(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${VITE_IP_API_KEY}&domain=${domain}`,
  );
  return res.data;
};

export { getData, getDataByIp, getDataByDomain };
