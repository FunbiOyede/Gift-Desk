import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./HomeNavigation.module.css";
import { Link } from "react-router-dom";

const HomeNavigation = () => (
  <div className={styles.header}>
    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
      <Typography
        variant="h6"
        style={{ fontWeight: 700, color: "rgb(56, 64, 72)" }}
      >
        Vivid Gift
      </Typography>
    </Link>
    <div
      style={{
        display: "flex",
        marginLeft: "auto"
      }}
    >
      <Link
        to="/login"
        style={{
          padding: "20px",
          textDecoration: "none",
          color: "black",
          lineHeight: "44px",
          fontSize: "19px"
        }}
      >
        Sign in
      </Link>
      <Link
        to="/register"
        style={{
          padding: "20px",
          textDecoration: "none",
          color: "black",
          lineHeight: "44px",
          fontSize: "19px"
        }}
      >
        Sign up
      </Link>
    </div>
  </div>
);
export default HomeNavigation;
