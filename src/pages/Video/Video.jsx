import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useStateContext } from "../../context/ContextProvider";
import Sidenav from "../../components/Sidenav/Sidenav";

export default function Video() {
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
          <Grid item sx={{ width: toggled.window }}>
            <Typography variant="h1">Video dashboard</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
