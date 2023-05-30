import { useTheme } from "@mui/material/styles";
import { useStateContext } from "../../context/ContextProvider";
import { Window } from "./Style";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Sidenav from "../../components/Sidenav/Sidenav";
import TitleBar from "../../components/TitleBar/TitleBar";
import Cards from "../../components/Cards/Cards";
import MasterTable from "../../components/Table/Table";
import Search from "../../components/Search/Search";
import { StartDate } from "../../components/Date/Date";
import { EndDate } from "../../components/Date/Date";
import { Filters, Filter } from "./Style";
import { columns } from "./Data/Data";
import { rows } from "./Data/Data";

import { SecondaryButton } from "../../components/Buttons/Buttons";

export default function Dashboard() {
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
          <Grid sx={{ width: toggled.sidenav }}>
            <Sidenav />
          </Grid>
          <Window sx={{ width: toggled.window }}>
            <TitleBar />
            <Cards />
            <Filters container spacing={2}>
              <Filter item>
                <Search />
              </Filter>
              <Filter item>
                <StartDate />
              </Filter>
              <Filter item>
                <EndDate />
              </Filter>
              <Filter item>
                <SecondaryButton value="Apply filter" />
              </Filter>
            </Filters>
            <MasterTable columns={columns} rows={rows} />
          </Window>
        </Grid>
      </Box>
    </>
  );
}
