import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Navigation from "../../components/Navigation/Navigation";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";
import { create_ideas } from "../../store/Actions/ActionCreators";
import { connect } from "react-redux";
import styles from "./Ideas.module.css";
class Ideas extends Component {
  state = {
    ItemName: "",
    Description: "",
    Url: "",
    Price: ""
  };

  getItemName = e => {
    this.setState({
      ItemName: e.target.value
    });
  };

  getDescription = e => {
    this.setState({
      Description: e.target.value
    });
  };

  getUrl = e => {
    this.setState({
      Url: e.target.value
    });
  };

  getProductPrice = e => {
    this.setState({
      price: parseInt(e.target.value, 10)
    });
  };
  HandleUserIdeas = e => {
    e.preventDefault();

    this.props.handle_user_ideas(
      this.state.ItemName,
      this.state.Description,
      this.state.Url,
      this.state.Price
    );
  };
  render() {
    return (
      <div>
        <Navigation />
        <div>
          <h4
            style={{
              color: "rgb(34, 34, 34)",
              fontWeight: "lighter",
              fontSize: "2.25rem"
            }}
          >
            Create Ideas
          </h4>
          <form style={form}>
            <TextField
              placeholder="E.g. Nike Fear Of God"
              label="item name"
              margin="normal"
              variant="outlined"
              onChange={this.getItemName}
            />
            <TextField
              label="Description"
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
              onChange={this.getDescription}
            />
            <TextField
              placeholder="placetobuy.com.ng"
              label="url"
              margin="normal"
              variant="outlined"
              onChange={this.getUrl}
            />

            <TextField
              label="price"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
              onChange={this.getProductPrice}
            />

            <Button
              variant="contained"
              style={{ background: "rgb(47, 108, 172)", color: "white" }}
              size="large"
              Icon={<SaveIcon />}
              onClick={this.HandleUserIdeas}
            >
              Create Ideas
            </Button>
          </form>

          <div style={{ margin: "30px" }}>
            <Link to="/idea" className={styles.links}>
              cancel
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

let form = {
  display: "grid",
  width: "40%",
  margin: "0 auto"
};

const mapDispatchToProps = dispatch => {
  return {
    handle_user_ideas: (name, Description, url, price) =>
      dispatch(create_ideas(name, Description, url, price))
  };
};

export default connect(null, mapDispatchToProps)(Ideas);
