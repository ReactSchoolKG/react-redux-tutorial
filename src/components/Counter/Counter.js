import React from 'react';

class Counter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: 0
		}

		this._increment = this._increment.bind(this);
		this._decrement = this._decrement.bind(this);
		this._reset = this._reset.bind(this);

	}
	render(){
		return (<div className='counter-container'>
							<div className='value'>{this.props.value}</div>
							<button onClick={this._increment}>+</button>
							<button onClick={this._decrement}>-</button>
							<button onClick={this._reset}>Reset</button>
						</div>)
	}

	_increment(){
		this.props.increment()
	}

	_decrement(){
		this.props.decrement()
	}
	_reset(){
		this.props.reset();
	}
}

export default Counter;