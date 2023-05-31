import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useStateContext } from "../../context/ContextProvider";
import Sidenav from "../../components/Sidenav/Sidenav";
import TitleBar from "../../components/TitleBar/TitleBar";
import Rows from "../../components/Rows/Rows";
import { Window } from "./Style";
import Data from "./Data/Data";
import Form from "../../components/Form/Form";

export default function Users() {
  const { isClicked, setIsClicked, sidenavOpen } = useStateContext();

  const theme = useTheme();

  const toggled = {
    sidenav: sidenavOpen ? theme.custom.sizing.sidenav.opened : theme.custom.sizing.sidenav.closed,
    window: sidenavOpen
      ? theme.custom.sizing.window.contracted
      : theme.custom.sizing.window.expanded,
  };

  return (
    <>
      <Box>
        <Grid container>
          <Grid item sx={{ width: toggled.sidenav }}>
            <Sidenav />
          </Grid>
          <Window sx={{ width: toggled.window }}>
            <TitleBar />
            {isClicked && (
              <Rows
                click={() => setIsClicked((prev) => !prev)}
                title={["Serial Number", "User Name", "Email Id", "Mobile Number", "Role"]}
                data={Data}
              />
            )}
            {!isClicked && (
              <Form
                click={() => setIsClicked((prev) => !prev)}
                purpose="Register User"
                input={["Name", "Mobile number", "Email Address", "Password"]}
                dropdown={["Select your role", "Admin", "Security", "Packer"]}
              />
            )}
          </Window>
        </Grid>
      </Box>
    </>
  );
}
