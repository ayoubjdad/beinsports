import React from "react";
import { Button as MuiButton, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          fontSize: "14px",
          padding: "4px 14px",
          borderRadius: "60px",
          border: "1px solid gray",
          color: "gray",
          backgroundColor: "transparent",
          boxShadow: "none",
          gap: "10px",
          height: "34px",
          minWidth: "34px",
        },
        startIcon: {
          marginRight: "0px",
          marginLeft: "0px",
          "& i": {
            fontSize: "16px !important",
          },
        },
        endIcon: {
          marginRight: "0",
          marginLeft: "0px",
          "& i": {
            fontSize: "16px !important",
          },
        },
      },
    },
  },
});

export default function Button({ title, startIcon, endIcon, sx }) {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        sx={{
          "&.MuiButton-root": {
            padding: title ? "4px 14px" : "4px 10px",
          },
          ...sx,
        }}
        endIcon={endIcon}
        startIcon={startIcon}
      >
        {title}
      </MuiButton>
    </ThemeProvider>
  );
}
