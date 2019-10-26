import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import React from "react";

const Navigation = props => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Vivid Gift</Typography>
        <Link to="/logout">Logout</Link>
        <Link to="/wishlists">wishlists</Link>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navigation;
