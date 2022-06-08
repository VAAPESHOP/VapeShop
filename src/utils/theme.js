import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary:{
      main: "#1fc4d6",
    },
    secondary:{
      main:"#120e12"
    },

    dashboard: {
      bg1:"#06283D",
      bg2: "#1363DF",
      bg3: "#F15412",
    },
    text: {
      t1:"#000",
      t2:"#fff",
    }
  },







  typography: {
    fontFamily: [
      "Open Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "30px",
      lineHeight: "40px",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "24px",
    },
    h3: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "20px",
    },
    h4: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
    },
    h5: {
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "16px",
    },
    sh: {
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "16px",
    },
    p: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "16px",
    },
  }
});

export default theme;
