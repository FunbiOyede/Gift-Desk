import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

class Idea extends Component {
  state = {};
  RedirectToIdeas = () => {
    this.props.history.push("/ideas");
  };
  render() {
    return (
      // based on props if the ideas table is empty
      <div>
        <Navigation />
        <h4
          style={{
            color: "rgb(34, 34, 34)",
            fontWeight: "lighter",
            fontSize: "2.25rem"
          }}
        >
          Ideas
        </h4>
        <div>
          <button
            onClick={this.RedirectToIdeas}
            style={{
              fontSize: "15px",
              textDecoration: "none",
              color: "#fff",
              background: "rgb(47, 108, 172)",
              borderRadius: "3px",
              padding: "15px 43px",
              textAlign: "center",
              border: "3px",
              position: "relative",
              right: "20px",
              float: "right",
              outline: "none",
              top: "-27px"
            }}
          >
            Create New Idea
          </button>

          {/* based of if the ideas column is empty */}
          <p>You dont have any ideas yet</p>
          <h3>Create one</h3>
        </div>
      </div>
    );
  }
}

export default withRouter(Idea);
