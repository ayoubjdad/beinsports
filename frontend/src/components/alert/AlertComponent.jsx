import React from "react";
import Alert from "@mui/material/Alert";

// const severity = ["success", "info", "warning", "error"];

export default function AlertComponent({ severity }) {
  return <Alert severity={severity}>هذا تنبيه للنجاح.</Alert>;
}
