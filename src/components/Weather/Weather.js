import {
  TextField,
  InputAdornment,
  Input,
  IconButton,
} from "@material-ui/core";
import { NearMe } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";

import React from "react";

import { fetchWeather } from "../../api/fetchWeather";
import { useWeatherStyles } from "./useWeatherStyles";

export const Weather = () => {
  const classes = useWeatherStyles();
  const [query, setQuery] = React.useState("");
  const [weather, setWeather] = React.useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
      console.log(data);
    }
  };
  return (
    <div className={classes.weatherContainer}>
      <div>
        <TextField
          className={classes.searchInput}
          fullWidth
          autoFocus
          inputProps={<Input />}
          variant="outlined"
          color="primary"
          type="submit"
          placeholder="Search location.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NearMe />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon color="primary" fontSize="large" />
              </IconButton>
            ),
          }}
        />
      </div>
      {weather.main && (
        <div className={classes.city}>
          <h2 className={classes.cityName}>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
        </div>
      )}
    </div>
  );
};
