import React from "react";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _class: null
    };
  }

  marked(i) {
    if (i === "X") return "square-x";
    else if (i === "O") return "square-o";
    else return;
  }

  render() {
    return (
      <button
        className={`square ${this.marked(this.props.value)}`}
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
