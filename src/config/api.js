import axios from "axios";

const api = axios.create({
  baseURL: "https://calendarific.com/api/v2",
});

export default api;
