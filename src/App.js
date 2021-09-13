import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Movies from "./components/movies";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App-Constructor");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps, this.props);
    console.log("prevState", prevState);
  }

  componentDidMount() {
    console.log("App-Mounted");
  }

  render() {
    console.log("App- Render");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main role="main" className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
        <Movies />
      </React.Fragment>
    );
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (item) => item.id !== counterId
    );

    this.setState({
      counters,
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({
      counters,
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({
      counters,
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({
      counters,
    });
  };
}
