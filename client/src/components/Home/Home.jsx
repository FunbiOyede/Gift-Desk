import React from "react";
import { Link } from "react-router-dom";

import HomeNav from "../Navigation/HomeNavigation";
const Home = () => {
  return (
    <div>
      <header role="banner">
        <HomeNav />
      </header>
      <div>
        <main role="main">
          <div>
            <h2
              style={{
                color: "#444444",
                fontSize: "42px",
                lineHeight: "1.5",
                paddingTop: "100px",
                marginBottom: "0"
              }}
            >
              Create wonderful wish lists Receive better gifts
            </h2>
            <h4
              style={{
                fontSize: "29px",
                color: "#444444",
                lineHeight: "1.5"
              }}
            >
              Save and organize your wishes.
            </h4>
          </div>
          <Link
            to="/register"
            style={{
              fontSize: "15px",
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#297AFB",
              borderRadius: "3px",
              padding: "15px 43px",
              textAlign: "center"
            }}
          >
            Get Started
          </Link>
        </main>
      </div>
      <footer
        style={{
          textAlign: "center",
          position: "relative",
          top: "100px"
        }}
      >
        <p>© 2019 Oluwafunbi</p>
      </footer>
    </div>
  );
};

export default Home;
