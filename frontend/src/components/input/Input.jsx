import React from "react";
import styles from "./Input.module.scss";
import cn from "classnames";
import { TextField, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "34px",
          borderRadius: "16px",
          fontFamily: "inherit",
          padding: "0px",
        },
        input: {
          padding: "4px 14px",
          height: "inherit",
        },
        notchedOutline: {
          borderColor: "red",
        },
      },
    },
  },
});

export default function Input({
  key,
  value,
  setValue,
  placeholder,
  isMultiline = false,
}) {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id={key}
        variant="outlined"
        // value={value}
        placeholder={placeholder}
        multiline={isMultiline}
        // onChange={(e) => setValue && setValue(e.target.value)}
      />
    </ThemeProvider>
  );
}

export function InputTextArea({ type, key, placeholder, value, setValue }) {
  return (
    <textarea
      type={type || "text"}
      name={key}
      placeholder={placeholder}
      className={cn(styles.input, styles.textarea)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
