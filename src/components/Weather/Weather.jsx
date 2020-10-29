import {
  TextField,
  InputAdornment,
  Input,
  Typography,
  Paper,
  Container,
  CardMedia,
} from "@material-ui/core";
import { NearMe } from "@material-ui/icons";

import React, { useEffect } from "react";

import { fetchWeather } from "../../api";
import { useWeatherStyles } from "./useWeatherStyles";
import { API_KEY } from "../../api";

export const Weather = () => {
  const [query, setQuery] = React.useState("");
  const [initialWeather, setInitialWeather] = React.useState({});
  const [fetchedWeather, setFetchedWeather] = React.useState({});
  const { renderedWeather } = fetchedWeather || initialWeather;

  const classes = useWeatherStyles();

  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  const getWeather = async (latitude, longitude) => {
    const INITIAL_WEATHER_URL = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const rawData = await fetch(INITIAL_WEATHER_URL);
    const data = await rawData.json();
    setInitialWeather(data);
  };
  useEffect(() => {
    getPosition()
      .then((position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setFetchedWeather(data);
      setQuery("");
      console.log(data);
    }
  };

  return (
    <Container className={classes.weatherContainer}>
      <Paper elevation={2} className={classes.searchInput}>
        <TextField
          autoFocus
          inputProps={<Input />}
          color="primary"
          type="submit"
          placeholder="Search location.."
          alt="Search location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NearMe fontSize="large" />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
      {renderedWeather && (
        <Container>
          <Paper elevation={2} className={classes.searchResult}>
            <Container className={classes.cityName}>
              <Typography gutterBottom align="center" variant="button">
                {renderedWeather.name}
              </Typography>
              <sup className={classes.sup}>{renderedWeather.sys.country}</sup>
            </Container>
            <Typography
              gutterBottom
              align="center"
              variant="h3"
              className={classes.temperature}
            >
              {Math.round(renderedWeather.main.temp)}
              <sup>&deg;C</sup>
            </Typography>
            <Container className={classes.info}>
              <CardMedia
                className={classes.infoMedia}
                component="img"
                image={`https://openweathermap.org/img/wn/${renderedWeather.weather[0].icon}@2x.png`}
                alt={renderedWeather.weather[0].description}
              ></CardMedia>
              <Typography gutterBottom align="center" variant="overline">
                {renderedWeather.weather[0].description}
              </Typography>
            </Container>
          </Paper>
        </Container>
      )}
    </Container>
  );
};
