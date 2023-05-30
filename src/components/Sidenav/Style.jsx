import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import theme from "../../theme/theme";

export const Container = styled(Box)(({ theme }) => ({
  background: theme.custom.palette.primary.gradient,
  height: "120%",
  position: "fixed",
  borderTopRightRadius: "3rem",
  borderBottomRightRadius: "3rem",
  boxShadow: "0 1rem 1.5rem rgba(0, 0, 0, 0.5)",
  zIndex: "99",
  overflowX: "scroll",
}));

export const Header = styled(Box)(() => ({
  display: "flex",
}));

export const User = styled(Box)(() => ({
  display: `${(props) => props.display}`,
}));

export const Name = styled(Box)(() => ({
  fontSize: theme.custom.typography.h2.fontSize,
  fontWeight: theme.custom.typography.h2.fontWeight,
}));

export const Role = styled(Box)(() => ({
  color: theme.custom.palette.secondary.solid,
  fontSize: theme.custom.typography.h2.fontSize,
  fontWeight: theme.custom.typography.h2.fontWeight,
}));

export const BurgerIcon = styled(Box)(() => ({
  cursor: "pointer",
  background: "transparent",
  border: "0",
}));

export const Menu = styled(Box)(() => ({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  marginTop: "5rem",
}));

export const StyledLink = styled(NavLink)(() => ({
  textDecoration: "0",
}));

export const Item = styled(Box)(() => ({
  borderRadius: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1.8rem",
  cursor: "pointer",
  color: "white",
  minHeight: "6rem",

  "&.active": {
    background: theme.custom.palette.tertiary.gradient,
    color: theme.custom.palette.tertiary.solid,
  },
}));

export const Label = styled(Box)(() => ({
  fontSize: theme.custom.typography.h2.fontSize,
  fontWeight: theme.custom.typography.h2.fontWeight,
  textDecoration: "none",
}));
