import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Navigation from "../../components/Navigation/Navigation";

import { Link, withRouter } from "react-router-dom";
import Aide from "../../components/HOC/Aide";
// import styles from "./createLists.module.css";
class UpdateWislists extends Component {
  state = {
    name: "",
    title: "",
    Description: "",
    url: "",
    productName: "",
    price: 0
  };
  getName = e => {
    this.setState({
      name: e.target.value
    });
  };

  getTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  getDescription = e => {
    this.setState({
      Description: e.target.value
    });
  };

  getProductUrl = e => {
    this.setState({
      url: e.target.value
    });
  };

  getProductName = e => {
    this.setState({
      productName: e.target.value
    });
  };

  getProducPrice = e => {
    this.setState({
      price: parseInt(e.target.value, 10)
    });
  };

  UpdateDetails = () => {
    const wish = {
      Name: this.state.name,
      Title: this.state.title,
      Description: this.state.Description,
      Url: this.state.url,
      ItemName: this.state.productName,
      Price: this.state.price
    };
    axios
      .put(
        "http://localhost:5000/vivid/wishlists/update/" +
          this.props.match.params.id,
        wish
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

    this.props.history.push("/wishlists");
  };
  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/vivid/wishlists/wish/" +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          name: res.data.forWhom,
          title: res.data.Title,
          Description: res.data.Description,
          url: res.data.Url,
          productName: res.data.Url,
          price: res.data.Price
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Aide>
        <Navigation />
        <h3>Update Wishlists</h3>

        <div>
          <form style={form}>
            <TextField
              placeholder="Uncle Jack"
              label="Who is this wish list for?"
              margin="normal"
              variant="outlined"
              onChange={this.getName}
              value={this.state.name}
            />
            <TextField
              placeholder="25th Birthday"
              label="title"
              margin="normal"
              variant="outlined"
              onChange={this.getTitle}
              value={this.state.title}
            />
            <TextField
              label="Description"
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
              onChange={this.getDescription}
              value={this.state.Description}
            />

            <TextField
              placeholder="placetobuy.com.ng"
              label="url"
              margin="normal"
              variant="outlined"
              onChange={this.getProductUrl}
              value={this.state.url}
            />
            <TextField
              placeholder="E.g. Nike Fear Of God"
              label="item name"
              margin="normal"
              variant="outlined"
              onChange={this.getProductName}
              value={this.state.productName}
            />
            <TextField
              label="price"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              type="number"
              variant="outlined"
              onChange={this.getProducPrice}
              value={this.state.price.toString()}
            />
            <Button
              to="/wishlists"
              variant="contained"
              style={{ background: "rgb(47, 108, 172)", color: "white" }}
              size="large"
              startIcon={<SaveIcon />}
              onClick={this.UpdateDetails}
            >
              Save Wishlists
            </Button>
          </form>
          <div style={{ margin: "30px" }}>
            <Link to="/wishlists">cancel</Link>
          </div>
        </div>
      </Aide>
    );
  }
}

let form = {
  display: "grid",
  width: "40%",
  margin: "0 auto"
};

export default withRouter(UpdateWislists);
