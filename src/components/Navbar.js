import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <CssBaseline>
      <AppBar
        sx={{
          position: "sticky",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">HVG</Typography>
          <Box>
            <Link to="/workshop">Workshop</Link>
            <Link to="/technical">Technical</Link>
            <Link to="/nontechnical">Non Technical</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

export default Navbar;
