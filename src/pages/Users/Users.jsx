import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useStateContext } from "../../context/ContextProvider";
import Sidenav from "../../components/Sidenav/Sidenav";
import TitleBar from "../../components/TitleBar/TitleBar";
import Rows from "../../components/Rows/Rows";
import { Window } from "./Style";
import Data from "./Data/Data";

export default function Users() {
  const { sidenavOpen } = useStateContext();

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
            <Rows data={Data} />
          </Window>
        </Grid>
      </Box>
    </>
  );
}
