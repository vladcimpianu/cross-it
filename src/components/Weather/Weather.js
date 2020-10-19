import { TextField, Paper, InputAdornment } from "@material-ui/core";
import { NearMe } from "@material-ui/icons";

import React from "react";

import { fetchWeather } from "../../api/fetchWeather";

export const Weather = () => {
  const [query, setQuery] = React.useState("");
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
    }
  };
  return (
    <Paper>
      <TextField
        autoFocus
        variant="outlined"
        type="search"
        margin="dense"
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
        }}
      />
    </Paper>
  );
};
