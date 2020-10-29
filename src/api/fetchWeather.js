import axios from "axios";
import { API_KEY, URL } from "./";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(`${URL}/`, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
