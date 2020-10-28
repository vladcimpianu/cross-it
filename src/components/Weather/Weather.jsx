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
import axios from "axios";

import React from "react";

import { API_KEY, URL } from "../../api";
import { fetchWeather } from "../../api";
import { useWeatherStyles } from "./useWeatherStyles";
import { usePosition } from "use-position";

export const Weather = () => {
  const [query, setQuery] = React.useState("");
  // const [initialWeather, setInitialWeather] = React.useState({});
  const [fetchedWeather, setFetchedWeather] = React.useState({});

  const watch = true;
  const { latitude, longitude } = usePosition(watch);
  const classes = useWeatherStyles();

  const fetchInitialWeather = async () => {
    const initialData = await axios
      .get(URL, {
        params: {
          lat: latitude,
          lon: longitude,
          units: "metric",
          APPID: API_KEY,
        },
      })
      .then((res) => res.data);
    console.log(initialData, "FETCHER");
    // setInitialWeather(initialData);
    return initialData;
  };
  const initialWeather = fetchInitialWeather();

  React.useEffect(() => {}, []);

  // React.useEffect(() => {
  //   const initialData = fetchInitialWeather({ latitude, longitude });
  //   setInitialWeather({ initialData });
  //   console.log(initialData, "COMPONENT");
  // }, [latitude, longitude]);

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
      {initialWeather && (
        <h1 style={{ color: "yellow", fontSize: "40px" }}>
          {initialWeather.name}
        </h1>
      )}
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
      {
        fetchedWeather.main ? (
          <Container>
            <Paper elevation={2} className={classes.searchResult}>
              <Container className={classes.cityName}>
                <Typography gutterBottom align="center" variant="button">
                  {fetchedWeather.name}
                </Typography>
                <sup className={classes.sup}>{fetchedWeather.sys.country}</sup>
              </Container>
              <Typography
                gutterBottom
                align="center"
                variant="h3"
                className={classes.temperature}
              >
                {Math.round(fetchedWeather.main.temp)}
                <sup>&deg;C</sup>
              </Typography>
              <Container className={classes.info}>
                <CardMedia
                  className={classes.infoMedia}
                  component="img"
                  image={`https://openweathermap.org/img/wn/${fetchedWeather.weather[0].icon}@2x.png`}
                  alt={fetchedWeather.weather[0].description}
                ></CardMedia>
                <Typography gutterBottom align="center" variant="overline">
                  {fetchedWeather.weather[0].description}
                </Typography>
              </Container>
            </Paper>
          </Container>
        ) : null
        // ) : (
        //   <>
        //     <Typography gutterBottom align="center" variant="button">
        //       {initialWeather.name}
        //     </Typography>
        //     <Typography
        //       gutterBottom
        //       align="center"
        //       variant="h3"
        //       className={classes.temperature}
        //     >
        //       {Math.round(initialWeather.main.temp)}
        //       <sup>&deg;C</sup>
        //     </Typography>
        //   </>
        // )
      }
    </Container>
  );
};