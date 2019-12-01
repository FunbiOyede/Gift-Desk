import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import CakeIcon from "@material-ui/icons/Cake";
import SettingsIcon from "@material-ui/icons/Settings";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import MoodIcon from "@material-ui/icons/Mood";
import styles from "./Dashboard.module.css";
import Navigation from "../Navigation/Navigation";

const Dashboard = props => (
  <div>
    <Navigation />
    <header>
      <h3 className={styles.Heading}>Dashboard</h3>
      <h3>{props.Date}</h3>
      <h4>Hi {props.Username} what do you want to do today </h4>
    </header>

    <div style={{ display: "flex" }}>
      <Link className={styles.DashboardList} style={paper} to="/create">
        <Typography variant="h5" component="h3">
          <CakeIcon className={styles.icons} /> Create Wishlists
          <p>Create a wish list for anything you want.</p>
        </Typography>
      </Link>

      <Link className={styles.DashboardList} style={paper} to="/settings">
        <Typography variant="h5" component="h3">
          <SettingsIcon className={styles.icons} />
          Settings
          <p>Update your details </p>
        </Typography>
      </Link>

      <Link className={styles.DashboardList} style={paper} to="/lists">
        <Typography variant="h5" component="h3">
          <FormatListNumberedIcon className={styles.icons} />
          Shopping Lists
          <p>The items you've reserved on friends you love</p>
        </Typography>
      </Link>

      <Link className={styles.DashboardList} style={paper} to="/idea">
        <MoodIcon className={styles.icons} />
        <Typography variant="h5" component="h3">
          <FormatListNumberedIcon className={styles.icons} />
          Ideas
        </Typography>
      </Link>
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

const mapStateToProps = state => {
  return {
    Username: state.name,
    Date: state.date
  };
};
export default connect(mapStateToProps)(Dashboard);
