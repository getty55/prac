import React, { Component } from "react";
import "./Array.css";
import Node from "./Node/Node";

const createNode = (col, row) => {
  return {
    col,
    row
  };
};

const initializeBlocks = () => {
  const blocks = [];
  let row = 0;
  const currRow = [];
  for (let col = 0; col < 20; ++col) currRow.push(createNode(col, row));
  blocks.push(currRow);

  return blocks;
};

const getAllBlocks = blocks => {
  const bblocks = [];
  for (const row of blocks) {
    for (const node of row) {
      if (row % 2 == 0) bblocks.push(node);
    }
  }
  return bblocks;
};

const getOtherBlocks = blocks => {
  const bblocks = getAllBlocks(blocks);
  return bblocks;
};

export default class Array extends Component {
  constructor() {
    super();
    this.state = {
      blocks: []
    };
  }

  componentDidMount() {
    const blocks = initializeBlocks();
    this.setState({ blocks });
  }

  doSomething() {
    const { blocks } = this.state;
    const otherBlocks = getOtherBlocks(blocks);
    for (let i = 0; i <= otherBlocks.length; ++i) {
      setTimeout(() => {
        const node = otherBlocks[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  }

  render() {
    const { blocks } = this.state;
    return (
      <div>
        <button onClick={() => this.doSomething()}>Hi</button>
        <div className="blocks">
          {blocks.map((row, ii) => {
            return (
              <div key={ii}>
                {row.map((node, jj) => {
                  const { row, col } = node;
                  return <Node key={jj} col={col} row={row}></Node>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
