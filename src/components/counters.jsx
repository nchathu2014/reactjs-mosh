import React, { Component, Fragment } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters-Rendred");
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <Fragment>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </Fragment>
    );
  }
}

export default Counters;
