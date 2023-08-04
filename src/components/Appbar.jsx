import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const Appbar = () => {
  return (
    <AppBar className="app-bar" sx={{ pl: 0 }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "spaceAround",
          alignItems: "center",
        }}
      >
        <AssignmentTurnedInIcon sx={{ fontSize: 48 }} />
        <Typography variant="h3">Project Manager Pro</Typography>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
