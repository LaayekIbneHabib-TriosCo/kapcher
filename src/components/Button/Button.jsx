import * as React from "react";
import Button from "@mui/material/Button";
import theme from "../../theme/theme";

export default function PrimaryButton(props) {
  return (
    <Button
      onClick={props.envoke}
      variant="contained"
      sx={{
        height: "4rem",
        marginTop: ".4rem",
        bgcolor: theme.custom.palette.primary.solid,
        "&:hover": { bgcolor: theme.custom.palette.primary.solid },
        fontSize: theme.custom.typography.p.fontSize,
      }}
    >
      {props.value}
    </Button>
  );
}
