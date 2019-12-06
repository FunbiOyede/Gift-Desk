import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styles from "./Login.module.css";
import HomeNav from "../Navigation/HomeNavigation";
import Aide from "../HOC/Aide";
class Login extends Component {
  render() {
    return (
      <Aide>
        <HomeNav />
        <div>
          <Typography
            variant="h6"
            style={{ fontWeight: 700, color: "rgb(56, 64, 72)" }}
          >
            Login
          </Typography>

          <form style={{ display: "grid", width: "40%", margin: "0 auto" }}>
            <TextField
              placeholder="Email"
              label="Email"
              margin="normal"
              type="email"
              variant="outlined"
              className={styles.Login}
            />
            <TextField
              placeholder="password"
              label="password"
              margin="normal"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              className={styles.Login}
            />

            <Button TypeOfForm="login" />
          </form>
          <div>
            <Link className={styles.link} to="/register">
              Register
            </Link>
          </div>
        </div>
      </Aide>
    );
  }
}

export default Login;
