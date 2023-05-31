import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useStateContext } from "../../context/ContextProvider";
import Sidenav from "../../components/Sidenav/Sidenav";
import { Window } from "./Style";
import BasicTabs from "../../components/Tabs/Tabs";
import Camera from "./Camera/Camera";
import Workstation from "./Workstation/Workstation";

const tabs = [
  {
    label: "Camera",
    Component: <Camera />,
  },
  {
    label: "Workstation",
    Component: <Workstation />,
  },
];

export default function Settings() {
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
          <Window item sx={{ width: toggled.window }}>
            <BasicTabs tabs={tabs} />
          </Window>
        </Grid>
      </Box>
    </>
  );
}
