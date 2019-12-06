import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styles from "./Register.module.css";
import HomeNav from "../Navigation/HomeNavigation";
import Aide from "../HOC/Aide";
class Register extends Component {
  render() {
    return (
      <Aide>
        <HomeNav />
        <div>
          <Typography
            variant="h6"
            style={{ fontWeight: 700, color: "rgb(56, 64, 72)" }}
          >
            Register
          </Typography>

          <form style={{ display: "grid", width: "40%", margin: "0 auto" }}>
            <TextField
              placeholder="Name"
              label="Name"
              margin="normal"
              variant="outlined"
              className={styles.Register}
            />
            <TextField
              placeholder="Email"
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
              className={styles.Register}
            />
            <TextField
              placeholder="Password"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              className={styles.Register}
            />

            <TextField
              placeholder="Confirm password"
              label="Confirm password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              className={styles.Register}
            />

            <Button TypeOfForm="register" />
          </form>
          <div>
            <Link className={styles.link} to="/login">
              Login
            </Link>
          </div>
        </div>
      </Aide>
    );
  }
}

export default Register;
