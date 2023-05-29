import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const Window = styled(Box)(({ theme }) => ({
  padding: "2rem",

  [theme.breakpoints.down("lg")]: {
    width: "calc(100% - 10rem)",
    marginLeft: "10rem",
  },
}));

export const Filters = styled(Grid)(({}) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "5rem",
}));

export const Filter = styled(Grid)(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "25rem",
  // background: "red",
}));
