import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Window = styled(Box)(({ theme }) => ({
  padding: "2rem",

  [theme.breakpoints.down("lg")]: {
    width: "calc(100% - 10rem)",
    marginLeft: "10rem",
  },
}));

export const Form = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "5rem",
  marginTop: "6rem",
}));

export const Input = styled(TextField)(() => ({
  width: "40rem",
}));
