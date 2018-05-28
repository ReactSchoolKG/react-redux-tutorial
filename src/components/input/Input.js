import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
  }

  render() {
    return (
      <div className="input-container">
        <div>
          <input
            type="text"
            value={this.props.value}
            onChange={this._onChange}
          />
          <div>Value: {this.props.value}</div>
        </div>
      </div>
    );
  }

  _onChange(e) {
    this.props.setInput(e.target.value);
  }
}

export default Input;
