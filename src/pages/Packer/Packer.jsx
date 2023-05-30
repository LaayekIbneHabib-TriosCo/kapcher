import { useTheme } from "@mui/material/styles";
import { useStateContext } from "../../context/ContextProvider";
import { Window } from "./Style";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Sidenav from "../../components/Sidenav/Sidenav";
import TitleBar from "../../components/TitleBar/TitleBar";
import MasterTable from "../../components/Table/Table";
import { columns } from "./Data/Data";
import { rows } from "./Data/Data";
import { Form, Input } from "./Style";
import { SecondaryButton } from "../../components/Buttons/Buttons";

import { useState } from "react";

export default function Packer() {
  const { sidenavOpen } = useStateContext();
  const [orderidFilter, setOrderidFilter] = useState("");
  const [trackingidFilter, setTrackingidFilter] = useState("");
  const [data, setData] = useState(rows);

  const theme = useTheme();

  const toggled = {
    sidenav: sidenavOpen ? theme.custom.sizing.sidenav.opened : theme.custom.sizing.sidenav.closed,
    window: sidenavOpen
      ? theme.custom.sizing.window.contracted
      : theme.custom.sizing.window.expanded,
  };

  const handleOrderidFilterChange = (event) => {
    setOrderidFilter(event.target.value);
  };

  const handleTrackingidFilterChange = (event) => {
    setTrackingidFilter(event.target.value);
  };

  const handleSearch = () => {
    const filteredData = rows.filter(
      (item) =>
        item.orderid.toLowerCase().includes(orderidFilter.toLowerCase()) &&
        item.trackingid.toLowerCase().includes(trackingidFilter.toLowerCase())
    );

    setData(filteredData);
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
            <Form>
              <Input
                value={orderidFilter}
                onChange={handleOrderidFilterChange}
                id="filled-basic"
                label="ORDER ID"
                variant="filled"
              />
              <Input
                value={trackingidFilter}
                onChange={handleTrackingidFilterChange}
                id="filled-basic"
                label="TRACKING ID"
                variant="filled"
              />
              <SecondaryButton click={handleSearch} value="Submit" />
            </Form>
            <MasterTable columns={columns} rows={data} />
          </Window>
        </Grid>
      </Box>
    </>
  );
}
