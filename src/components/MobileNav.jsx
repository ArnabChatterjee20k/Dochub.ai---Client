import * as React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import NavLinks from "../data/NavLinks";

export default function MobileNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, display:{"sm":"none"} }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
            color: "#757575",
          },
          "& .Mui-selected": {
            "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
              color: "black"
            },
          },
        }}
      >
        {NavLinks().map(({ name, Icon },index) => {
          return <BottomNavigationAction value={index} label={name} icon={Icon}/>;
        })}
      </BottomNavigation>
    </Paper>
  );
}
