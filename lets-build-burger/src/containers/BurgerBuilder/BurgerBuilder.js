import React, { Component } from "react";

export default class BurderBuilder extends Component {
  constructor() {
    super();

    this.toNavigateHandler = this.toNavigateHandler(this);
  }

  toNavigateHandler() {
    console.log(this.props);
    if (this.props) {
      this.props.history.push("/burger");
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        BurderBuilder
        <button onClick={() => this.toNavigateHandler()}>To Burger</button>
      </div>
    );
  }
}
