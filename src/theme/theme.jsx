import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  custom: {
    palette: {
      primary: {
        solid: "#4aa592",
        gradient: "linear-gradient(240deg, #ffffff 0%, #9bdcd4 49.29%, #294259 100%)",
      },

      secondary: {
        solid: "#54c0a9",
        gradient: "linear-gradient(180deg, #ffffff 0%, #ace2e4 100%)",
      },

      tertiary: {
        solid: "#273b52",
        gradient: "linear-gradient(180deg, #ffffff 0%, #d2feed 100%)",
      },
    },

    typography: {
      fontFamily: "'Poppins', Arial, sans-serif",

      h1: {
        fontSize: "7.5rem",
        fontWeight: 600,
      },

      h2: {
        fontSize: "1.5rem",
        fontWeight: 500,
      },

      p: {
        fontSize: "1rem",
        fontWeight: 400,
      },
    },

    sizing: {
      sidenav: {
        opened: "35rem",
        closed: "10rem",
      },

      window: {
        contracted: "calc(100% - 35rem)",
        expanded: "calc(100% - 10rem)",
      },
    },
  },
});

export default theme;
