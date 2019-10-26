import React from "react";
import ErrorImage from "../../assets/404-no-page-found-ghost.png";
import { Link } from "react-router-dom";
const Error = () => (
  <div>
    <img src={ErrorImage} alt="" />
    <h4>Oh no! Something went wrong</h4>

    {/* coming soon */}
    <Link to="/home"></Link>
  </div>
);

export default Error;
