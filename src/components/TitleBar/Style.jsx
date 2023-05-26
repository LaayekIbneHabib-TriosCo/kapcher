import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  background: "rgba(84, 192, 169, 0.15)",
  borderRadius: "5rem",
  height: "6.5rem",
  boxShadow: "0 1rem 1.5rem rgba(0, 0, 0, 0.1)",
}));
