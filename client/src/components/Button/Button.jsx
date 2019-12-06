import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
const Button = props => {
  if (props.TypeOfForm === "login") {
    return <button className={styles.Button}>Login</button>;
  }
  if (props.TypeOfForm === "register") {
    return <button className={styles.Button}>Register</button>;
  }
};

Button.propTypes = {
  TypeOfForm: PropTypes.string
};
export default Button;
