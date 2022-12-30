import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import Divider  from "@mui/material/Divider";
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function DrawerNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 200;
  const drawer = (
    <div>
      <List>
          <ListItem >
            <ListItemButton sx={{gap:2,borderRadius:4}}>
                <SmartToyOutlinedIcon/>
              <ListItemText primary={"Bot"} sx={{color:"#515151",fontWeight:"bold"}}/>
            </ListItemButton>
          </ListItem>
          
          <ListItem >
            <ListItemButton sx={{gap:2,borderRadius:4}}>
                <KeyboardAltOutlinedIcon/>
              <ListItemText primary={"Editor"} sx={{color:"#515151",fontWeight:"bold"}}/>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton sx={{gap:2,borderRadius:4}}>
                <FilterDramaOutlinedIcon/>
              <ListItemText primary={"Recent"} sx={{color:"#515151",fontWeight:"bold"}}/>
            </ListItemButton>
          </ListItem>

          <Divider/>

          <ListItem>
            <ListItemButton sx={{gap:2,borderRadius:4}}>
                <InfoOutlinedIcon/>
              <ListItemText primary={"About"} sx={{color:"#515151",fontWeight:"bold"}}/>
            </ListItemButton>
          </ListItem>

      </List>
    </div>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              minHeight:"100vh",
              position:"static",
              border:"none"
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
