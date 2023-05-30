import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Window = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: "2rem",

  [theme.breakpoints.down("lg")]: {
    width: "calc(100% - 10rem)",
    marginLeft: "10rem",
  },
}));
