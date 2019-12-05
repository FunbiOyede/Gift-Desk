import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./Ideas.module.css";
class IdeasCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navigation />
        <div>
          <h2>yup ideas create</h2>
          <h4>Is this idea for you?</h4>
          <Link to="/ideas" className={styles.links}>
            Yes, for me
          </Link>
          <Link to="/NonUsersIdeas" className={styles.links}>
            No, for someone else
          </Link>
        </div>
      </div>
    );
  }
}

export default IdeasCreate;
