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

import React from "react";

import { fetchWeather, getInitialWeather } from "../../api";
import { useWeatherStyles } from "./useWeatherStyles";

export const Weather = () => {
  const [query, setQuery] = React.useState("");
  const [weather, setWeather] = React.useState({});

  const classes = useWeatherStyles();

  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  React.useEffect(() => {
    getPosition()
      .then((position) => {
        setWeather(
          getInitialWeather(position.coords.latitude, position.coords.longitude)
        );
      })
      .catch((err) => console.log(err?.message));
  }, []);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
      console.log(data);
    }
  };

  console.log(weather);

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

      <Container>
        <Paper elevation={2} className={classes.searchResult}>
          <Container className={classes.cityName}>
            <Typography gutterBottom align="center" variant="button">
              {weather.name}
            </Typography>
            <sup className={classes.sup}>{weather.sys.country}</sup>
          </Container>
          <Typography
            gutterBottom
            align="center"
            variant="h3"
            className={classes.temperature}
          >
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </Typography>
          <Container className={classes.info}>
            <CardMedia
              className={classes.infoMedia}
              component="img"
              image={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            ></CardMedia>
            <Typography gutterBottom align="center" variant="overline">
              {weather.weather[0].description}
            </Typography>
          </Container>
        </Paper>
      </Container>
    </Container>
  );
};
