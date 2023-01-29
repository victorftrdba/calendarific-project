import api from "../config/api";

const get = async (day = null, month = null) => {
  const response = await api.get("/holidays", {
    params: {
      api_key: "1ba0e18c59501a2e046bae220f78e2ec634c5e6f",
      year: new Date().getFullYear(),
      day,
      month,
      country: "BR",
    },
  });

  return response.data.response.holidays;
};

export { get };
