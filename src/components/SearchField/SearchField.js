import { TextField, Input } from "@material-ui/core";
import React from "react";

export function SearchField({
  value = "",
  onChange,
  onKeyPress,
  type,
  placeholder,
  InputProps,
}) {
  return (
    <TextField
      value={value}
      placeholder={placeholder}
      alt="Search location"
      inputProps={<Input />}
      onChange={onChange}
      onKeyPress={onKeyPress}
      type={type}
      InputProps={InputProps}
    />
  );
}
