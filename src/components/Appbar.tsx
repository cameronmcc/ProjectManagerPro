// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const Appbar = () => {
  return (
    <AppBar className="app-bar" sx={{ pl: 0, position: "static" }}>
      <Toolbar
        sx={{
          paddingLeft: "0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "spaceAround",
          alignItems: "center",
        }}
      >
        <AssignmentTurnedInIcon sx={{ fontSize: 48 }} />
        <Box>
          <Typography
            variant="h3"
            sx={{
              ml: 2,
              display: "flex",
              width: "84vw",
              justofyContent: "center",
              aignItems: "center",
            }}
          >
            Project Manager Pro
          </Typography>
        </Box>
        <IconButton>
          <MenuIcon sx={{ fontSize: 48, color: "white" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
