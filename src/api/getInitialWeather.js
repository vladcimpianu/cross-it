import axios from "axios";
import { API_KEY } from ".";

export const getInitialWeather = async function (lat, lon) {
  try {
    const URL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const rawData = await axios(URL);
    return rawData.data;
  } catch (err) {
    console.error(err);
  }
};
