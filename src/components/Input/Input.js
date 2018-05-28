import React, {Component} from 'react';
import './Input.css'

export default class Input extends Component {
  render() {
    const { 
      counter,
      input,
      enter,
      enterText,
    } = this.props;

    return (
      <div className="input-container">
        <div className="value">
            {counter.value}
        </div>
        <input 
          value={input.value}
          onChange={e => enterText(e.target.value)}
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
