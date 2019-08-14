import React from "react";

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: "X",
      back: null
    };
  }
  render() {
    return (
      <div className="panel">
        <div className="panel-next">{this.props.status}</div>
        <div className="panel-buttons">
          <button
            className="panel-button panel-button-left"
            onClick={() => this.props.jump(this.props.step - 1)}
            disabled={this.props.step <= 0 ? true : false}
          >
            <i className="fas fa-arrow-left" />
          </button>
          <button
            className="panel-button panel-button-middle"
            onClick={() => this.props.jump(0)}
            disabled={this.props.step <= 0 ? true : false}
          >
            <i className="fas fa-refresh" />
          </button>
          <button
            className="panel-button panel-button-right"
            onClick={() => this.props.jump(this.props.step + 1)}
            disabled={this.props.step >= this.props.max - 1 ? true : false}
          >
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    );
  }
}
