import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="email" />
          <input type="password" />
          <Button TypeOfForm="login" />
        </form>
        <div>
          <Link
            style={{
              color: "blue",
              textAlign: "center",
              textDecoration: "none"
            }}
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
