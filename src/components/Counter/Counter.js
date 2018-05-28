import React, { Component } from 'react';

class Counter extends Component {


  render() {
  	
    return (
     <div className="couter-container">
       <div>
       <div>{this.props.value}</div>
       	<button onClick={this._increment}>+</button>
   		   <button onClick={this._decrement}>-</button>
         <button onClick={this._reset}>Reset</button>
       </div>
     </div>
    )
  }

  _increment = () => {
  	this.props.increment()
  }

    _decrement = () => {
  	this.props.decrement()
  }


  _reset = () => {
    this.props.reset()
  }

}

export default Counter;