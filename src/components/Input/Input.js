import React, {Component} from 'react';
import './Input.css'

export default class Input extends Component {
  handleChange = e => this.props.enterText(e.target.value);

  render() {
    const { 
      counter,
      input,
      resetInput,
    } = this.props;

    return (
      <div className="input-container">
        <div className="value">
            {counter.value}
        </div>
        <input 
          value={input.value}
          onChange={this.handleChange}
        />
        <div>
          <span style={{color: `#000`}}>You've entered next text: </span>
          <span style={{color: `#00FF00`}}>{input.value}</span>
        </div>
        <button
          onClick={resetInput}
        >
          reset input
        </button>
      </div>
    );
  }
}
