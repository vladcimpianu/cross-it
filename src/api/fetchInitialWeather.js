import axios from "axios";

export const URL = "//api.openweathermap.org/data/2.5/weather";

export const fetchInitialWeather = async (latitude, longitude) => {
  const { initialData } = await axios.get(URL, {
    params: {
      lat: latitude,
      lon: longitude,
      units: "metric",
      APPID: process.env.REACT_APP_API_KEY,
    },
  });
  // console.log(initialData);
  return initialData;
};
