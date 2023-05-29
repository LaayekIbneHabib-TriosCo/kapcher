import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import {
  Container,
  Header,
  User,
  Name,
  Role,
  BurgerIcon,
  Menu,
  Item,
  Label,
  StyledLink,
} from "./Style";

export default function Sidenav() {
  const { sidenavOpen, setSidenavOpen } = useStateContext();

  const theme = useTheme();
  const location = useLocation();
  const path = location.pathname;

  const toggled = {
    width: sidenavOpen ? theme.custom.sizing.sidenav.opened : theme.custom.sizing.sidenav.closed,
    padding: sidenavOpen ? "4rem" : "4rem 2rem 0 2rem",
    justifyContent: sidenavOpen ? "space-between" : "center",
    display: sidenavOpen ? "block" : "none",
  };

  return (
    <>
      <Container sx={{ width: toggled.width, padding: toggled.padding }}>
        <Header sx={{ justifyContent: toggled.justifyContent }}>
          <User sx={{ display: toggled.display }}>
            <Name>Bright Feranmi</Name>
            <Role>Admin</Role>
          </User>
          <BurgerIcon onClick={() => setSidenavOpen((prevState) => !prevState)}>
            <img src="assets/burger-icon.svg" alt="" />
          </BurgerIcon>
        </Header>

        <Menu>
          {(path === "/dashboardforadmin" ||
            path === "/users" ||
            path === "/livestream" ||
            path === "/settings") && (
            <>
              <StyledLink to="/dashboardforadmin">
                <Item className={path == "/dashboardforadmin" ? "active" : ""}>
                  <img
                    src={
                      path == "/dashboardforadmin" ? "assets/admin-dark.svg" : "assets/admin.svg"
                    }
                    alt=""
                  />
                  <Label sx={{ display: toggled.display }}>Dashboard</Label>
                </Item>
              </StyledLink>

              <StyledLink to="/users">
                <Item className={path == "/users" ? "active" : ""}>
                  <img
                    src={path == "/users" ? "assets/users-dark.svg" : "assets/users.svg"}
                    alt=""
                  />
                  <Label sx={{ display: toggled.display }}>Users</Label>
                </Item>
              </StyledLink>

              <StyledLink to="/livestream">
                <Item className={path == "/livestream" ? "active" : ""}>
                  <img
                    src={
                      path == "/livestream"
                        ? "assets/live-stream-dark.svg"
                        : "assets/live-stream.svg"
                    }
                    alt=""
                    style={{ width: "2.4rem" }}
                  />
                  <Label sx={{ display: toggled.display }}>Live Stream</Label>
                </Item>
              </StyledLink>

              <StyledLink to="/settings">
                <Item className={path == "/settings" ? "active" : ""}>
                  <img
                    src={path == "/settings" ? "assets/settings-dark.svg" : "assets/settings.svg"}
                    alt=""
                  />
                  <Label sx={{ display: toggled.display }}>Settings</Label>
                </Item>
              </StyledLink>
            </>
          )}

          {(path === "/dashboardforsecurity" || path === "/livestreamforsecurity") && (
            <>
              <StyledLink to="/dashboardforsecurity">
                <Item className={path == "/dashboardforsecurity" ? "active" : ""}>
                  <img
                    src={
                      path == "/dashboardforsecurity" ? "assets/admin-dark.svg" : "assets/admin.svg"
                    }
                    alt=""
                  />
                  <Label sx={{ display: toggled.display }}>Dashboard</Label>
                </Item>
              </StyledLink>

              <StyledLink to="/livestreamforsecurity">
                <Item className={path == "/livestreamforsecurity" ? "active" : ""}>
                  <img
                    src={
                      path == "/livestreamforsecurity"
                        ? "assets/live-stream-dark.svg"
                        : "assets/live-stream.svg"
                    }
                    alt=""
                    style={{ width: "2.4rem" }}
                  />
                  <Label sx={{ display: toggled.display }}>Live Stream</Label>
                </Item>
              </StyledLink>
            </>
          )}

          {path === "/dashboardforpacker" && (
            <StyledLink to="/dashboardforpacker">
              <Item className={path == "/dashboardforpacker" ? "active" : ""}>
                <img
                  src={
                    path == "/dashboardforpacker" ? "assets/packer-dark.svg" : "assets/packer.svg"
                  }
                  alt=""
                />
                <Label sx={{ display: toggled.display }}>Packers Dashboard</Label>
              </Item>
            </StyledLink>
          )}
        </Menu>
      </Container>
    </>
  );
}
