import React, { Component } from "react";

import "../App.css";

import Navbar from "./Navbar";
import Services from "./Services";
import Hero from "./common/Hero";
import Banner from "./common/Banner";

class Home extends Component {
  state = {};
  render() {
    const { user } = this.props;

    return (
      <>
        <header>
          <Navbar user={user} />
        </header>
        <Hero>
          <Banner
            title="Kanga Hotel"
            subtitle="deluxe rooms starting at $199"
          ></Banner>
        </Hero>
        <Services />
      </>
    );
  }
}

export default Home;
