import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import styles from "./Dashboard.module.css";
import Navigation from "../Navigation/Navigation";

const Dashboard = props => (
  <div>
    <Navigation />
    <div>
      <header>
        <h4 className={styles.Heading}>Dashboard</h4>
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

        <Link className={styles.DashboardList} style={paper} to="/ideas">
          <Typography variant="h6" component="h2">
            <span role="img" aria-label="image">
              👪
            </span>
            Create Ideas
            <p>A private place for you, your friends and family . </p>
          </Typography>
        </Link>

        <Link className={styles.DashboardList} style={paper} to="/idea">
          <Typography variant="h6" component="h2">
            <span role="img" aria-label="image">
              💡
            </span>
            Ideas
            <p>View Ideas </p>
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
      </div>
    </div>
  </div>
);

const paper = {
  width: "30%",
  height: "200px",
  padding: "1.25rem 2.5rem 1.25rem 1.5rem",
  margin: "10px 20px",
  backgroundColor: "white"
};

// const mapStateToProps = state => {
//   return {
//     Username: state.name,
//     Date: state.date
//   };
// };
export default Dashboard;
