import { Typography, Paper, Container, CardMedia } from "@material-ui/core";
import React from "react";
import { Loading } from "../Loading/Loading";

import { fetchWeather } from "../../api";
import { SearchField } from "../SearchField/SearchField";
import { useWeatherStyles } from "./useWeatherStyles";
import { API_KEY } from "../../api";

export const Weather = () => {
  const [query, setQuery] = React.useState("");
  const [fetchedWeather, setFetchedWeather] = React.useState({});
  const [initialWeather, setInitialWeather] = React.useState({});

  const classes = useWeatherStyles();

  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getInitialWeather = async function (lat, lon) {
    const newURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const rawData = await fetch(newURL);
    const data = await rawData.json();
    setInitialWeather(data);
    return data;
  };

  React.useEffect(() => {
    getPosition()
      .then((position) => {
        getInitialWeather(
          position.coords.latitude.toFixed(2),
          position.coords.longitude.toFixed(2)
        );
      })
      .catch((err) => console.log(err?.message));
  }, []);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setFetchedWeather(data);
      setQuery("");
      console.log(data);
    }
  };

  const renderedWeather = fetchedWeather.main ? fetchedWeather : initialWeather;
  return renderedWeather.main ? (
    <Container className={classes.weatherContainer}>
      <Paper elevation={2} className={classes.searchInput}>
        <SearchField
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleSearch}
          value={query}
          type="submit"
        />
      </Paper>
      {renderedWeather.main && (
        <Container>
          <Paper elevation={2} className={classes.searchResultsContainer}>
            <Container className={classes.cityName}>
              <Typography gutterBottom align="center" variant="overline">
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
            <Typography
              gutterBottom
              align="center"
              variant="overline"
              className={classes.temperature}
            >
              Feels like: {Math.round(renderedWeather.main.feels_like)}
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
  ) : (
    <Loading delay={2000} />
  );
};
