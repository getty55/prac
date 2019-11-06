import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  render() {
    const { col, row } = this.props;
    return <div id={`node-${row}-${col}`} className={`node`}></div>;
  }
}
