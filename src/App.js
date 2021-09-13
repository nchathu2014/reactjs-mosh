import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Movies from "./components/movies";
import Counters from "./components/counters";

export default class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Counters />
      </main>
    );
  }
}
