import React from "react";
import styles from "./Button.module.css";
const Button = props => {
  if (props.TypeOfForm === "login") {
    return <button className={styles.Button}>login</button>;
  }
  if (props.TypeOfForm === "register") {
    return <button className={styles.Button}>register</button>;
  }
};

export default Button;
