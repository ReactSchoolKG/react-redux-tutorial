import React, { Component } from 'react';

export default class Counter extends Component {
  constructor (props) {
    super(props);

    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
    this._reset = this._reset.bind(this);
  }

  _increment() {
    this.props.increment();
  }

  _decrement() {
    this.props.decrement();
  }

  _reset() {
    this.props.resetCounter();
  }

  render() {
    const { value } = this.props;

    return (
      <div className='counter-container'>
        <div className='value'>
            {value}
        </div>
        <button onClick={this._increment}>+</button>
        <button onClick={this._decrement}>-</button>
        <button onClick={this._reset}>reset counter</button>
      </div>
    );
  }
}
