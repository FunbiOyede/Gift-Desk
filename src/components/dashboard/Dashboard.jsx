import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CakeIcon from "@material-ui/icons/Cake";
import SettingsIcon from "@material-ui/icons/Settings";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import MoodIcon from "@material-ui/icons/Mood";
import styles from "./Dashboard.module.css";

const Dashboard = props => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Vivid Gift</Typography>
        <Link to="/logout">Logout</Link>
      </Toolbar>
    </AppBar>
    <header>
      <h3 className={styles.Heading}>Dashboard</h3>
      <h4>HI user what do you want to do</h4>
    </header>

    <div style={{ display: "flex" }}>
      <Paper className={styles.DashboardList} style={paper}>
        <Typography variant="h5" component="h3">
          <Link className={styles.Links} to="/wishlists">
            <CakeIcon className={styles.icons} /> Create Wishlists
            <p>Create a wish list for anything you want.</p>
          </Link>
        </Typography>
      </Paper>
      <Paper className={styles.DashboardList} style={paper}>
        <Typography variant="h5" component="h3">
          <Link className={styles.Links} to="/settings">
            <SettingsIcon className={styles.icons} />
            Settings
            <p>Update your details </p>
          </Link>
        </Typography>
      </Paper>
      <Paper className={styles.DashboardList} style={paper}>
        <Typography variant="h5" component="h3">
          <Link className={styles.Links} to="/lists">
            <FormatListNumberedIcon className={styles.icons} />
            Shopping Lists
            <p>The items you've reserved on friends you love</p>
          </Link>
        </Typography>
      </Paper>

      <Paper className={styles.DashboardList} style={paper}>
        <Typography variant="h5" component="h3">
          <Link className={styles.Links} to="/ideas">
            <MoodIcon className={styles.icons} />
            Ideas
          </Link>
        </Typography>
      </Paper>
    </div>
  </div>
);

const paper = {
  width: "30%",
  height: "200px",
  padding: "1.25rem 2.5rem 1.25rem 1.5rem",
  margin: "10px 20px",
  backgroundColor: "whitesmoke"
};
export default Dashboard;
