import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./Ideas.module.css";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
          <Typography
            variant="body2"
            color="textSecondary"
            gutterBottom
            style={Typo}
          >
            Is this idea for you?
          </Typography>

          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "42rem",
              padding: "2.625rem 1.3125rem"
            }}
          >
            <Link to="/ideas" style={paper} className={styles.cardsLink}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom style={Typo}>
                  Yes, for me
                </Typography>
              </CardContent>
            </Link>

            <Link
              to="/NonUsersIdeas"
              style={paper}
              className={styles.cardsLink}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom style={Typo}>
                  No, for someone else
                </Typography>
              </CardContent>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const paper = {
  width: "30%",
  height: "200px",
  padding: "1.25rem 2.5rem 1.25rem 1.5rem",
  margin: "10px 20px",
  backgroundColor: "rgb(47, 108, 172)",
  borderRadius: "4px"
};
const Typo = {
  textAlign: "center",
  marginTop: "33px",
  fontSize: "1.5rem",
  color: "#fff"
};

export default IdeasCreate;
