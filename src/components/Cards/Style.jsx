import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import theme from "../../theme/theme";

export const Container = styled(Box)(() => ({
  marginTop: 50,
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 50,
  "& > :not(style)": {
    width: 450,
    height: 225,
  },
}));

export const Card = styled(Paper)(() => ({
  padding: "2rem",
  borderRadius: "1.5rem",
}));

export const Value = styled(Typography)(() => ({
  fontSize: theme.custom.typography.h1.fontSize,
  fontFamily: theme.custom.typography.fontFamily,
  fontWeight: theme.custom.typography.h1.fontWeight,
  color: theme.custom.palette.primary.solid,
  textAlign: "center",
}));

export const Caption = styled(Typography)(() => ({
  fontSize: theme.custom.typography.h2.fontSize,
  fontFamily: theme.custom.typography.fontFamily,
  fontWeight: theme.custom.typography.h2.fontWeight,
  color: theme.custom.palette.primary.solid,
  textAlign: "center",
}));
