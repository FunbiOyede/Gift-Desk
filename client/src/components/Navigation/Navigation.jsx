import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import React from "react";

const Navigation = props => (
  <div>
    <AppBar
      position="static"
      style={{ background: "#4c8068c7", width: "100%" }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Typography variant="h6">Vivid Gift</Typography>
        </Link>

        <div>
          <Link
            to="/signout"
            style={{ padding: "20px", textDecoration: "none", color: "white" }}
          >
            Logout
          </Link>
          <Link
            to="/wishlists"
            style={{ padding: "20px", textDecoration: "none", color: "white" }}
          >
            wishlists
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navigation;
