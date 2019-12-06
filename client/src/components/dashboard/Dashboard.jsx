import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import styles from "./Dashboard.module.css";
import Navigation from "../Navigation/Navigation";

const Dashboard = props => (
  <div>
    <Navigation />
    <div>
      <header>
        <h4 className={styles.Heading}>Dashboard</h4>

        {/* <h3>{props.Date}</h3> */}

        <h4>Hi {props.Username} what do you want to do today? </h4>
      </header>

      <div style={{ display: "flex" }}>
        <Link className={styles.DashboardList} style={paper} to="/create">
          <Typography variant="h6" component="h2">
            <span role="img" aria-label="image">
              🎁
            </span>{" "}
            Create Wishlists
            <p>Create a wish list for anything you want.</p>
          </Typography>
        </Link>

        <Link className={styles.DashboardList} style={paper} to="/settings">
          <Typography variant="h6" component="h2">
            <span role="img" aria-label="image">
              ⚙️
            </span>
            Settings
            <p>Update your details </p>
          </Typography>
        </Link>

        <Link className={styles.DashboardList} style={paper} to="/lists">
          <Typography variant="h6" component="h2">
            <span role="img" aria-label="image">
              🛒
            </span>
            Shopping Lists
            <p>The items you've reserved on friends you love</p>
          </Typography>
        </Link>

        <Link className={styles.DashboardList} style={paper} to="/idea">
          <Typography variant="h6" component="h2">
            <span role="img" aria-label="image">
              💡
            </span>
            Ideas
            <p>A private place just for you,for yourself and your friends. </p>
          </Typography>
        </Link>
      </div>
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

// const mapStateToProps = state => {
//   return {
//     Username: state.name,
//     Date: state.date
//   };
// };
export default Dashboard;
