import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import { localDB } from "./createLists";

class Wishlists extends Component {
  state = {
    user: {}
  };
  RedirectToCreateWishLists = () => {
    this.props.history.push("/create");
  };

  componentDidMount() {
    localDB
      .get("2019-10-28T20:18:39.094Z")
      .then(doc => {
        let data = { ...doc };
        this.setState({
          user: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Navigation />
        <p>hello mr {this.state.user.name}</p>
        <h3>Wish lists</h3>
        <p>You have {this.props.child} upcoming wish lists</p>
        <div>
          <button onClick={this.RedirectToCreateWishLists}>
            New Wishlists
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Wishlists);
