import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import * as ActionCreators from "../../store/Actions/ActionCreators";

import Button from "@material-ui/core/Button";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import axios from "axios";
class Wishlists extends Component {
  state = {
    user: {},
    wishlistNumber: 0
  };
  RedirectToCreateWishLists = () => {
    this.props.history.push("/create");
  };

  componentDidMount() {
    this.props.FetchWishlists();
    axios.get("http://localhost:5000/vivid/wishlists/count").then(res => {
      console.log(res.data.count);
      this.setState({
        wishlistNumber: res.data.count
      });
    });
  }

  render() {
    let ErrorMessage;
    if (this.props.error) {
      ErrorMessage = <h4 style={{ color: "red" }}>Unable to fetch wishlist</h4>;
    }
    return (
      <div>
        <Navigation />

        <Typography>Wish lists</Typography>
        {/* count number of query */}
        <p>You have {this.state.wishlistNumber} wish lists</p>
        {ErrorMessage}
        <div>
          <button
            onClick={this.RedirectToCreateWishLists}
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
              top: "-57px"
            }}
          >
            New Wishlists
          </button>
        </div>
        <div>
          {this.props.wishlist.map((wish, index) => (
            <div key={index}>
              <ExpansionPanel
                style={{
                  width: "50%",
                  margin: "10px auto",
                  background: "rgb(47, 108, 172)",
                  color: "#fff"
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography> {wish.forWhom}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                  style={{
                    display: "block",
                    float: "left"
                  }}
                >
                  <Typography>{wish.Title}</Typography>
                  <Typography>{wish.ItemName}</Typography>
                  <Typography>#{wish.Price}</Typography>

                  <Button variant="contained" color="primary" href={wish.Url}>
                    View Online
                  </Button>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    FetchWishlists: () => dispatch(ActionCreators.get_wishlists())
  };
};
const mapStateToProps = state => {
  return {
    wishlist: state.Wish.Wishlists,
    error: state.Wish.error
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Wishlists)
);
