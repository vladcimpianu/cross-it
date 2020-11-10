import axios from "axios";
import { URL } from "./";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(`${URL}/`, {
    params: {
      q: query,
      units: "metric",
      APPID: process.env.REACT_APP_API_KEY,
    },
  });
  return data;
};
