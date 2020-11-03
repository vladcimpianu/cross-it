import { TextField, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

export function SearchField({
  value = "",
  onChange,
  onKeyPress,
  type,
  InputProps,
}) {
  return (
    <TextField
      value={value}
      placeholder="Search"
      alt="Search location"
      inputProps={<Input />}
      onChange={onChange}
      onKeyPress={onKeyPress}
      type={type}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="large" />
          </InputAdornment>
        ),
      }}
    />
  );
}
