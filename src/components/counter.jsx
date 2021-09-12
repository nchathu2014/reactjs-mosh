import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag-1", "tag-2", "tag-3"],
  };

  /*  constructor() {
    super();
    this.hanleIncrement = this.hanleIncrement.bind(this);
  } */

  hanleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-sm btn-secondary"
          onClick={this.hanleIncrement}
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
