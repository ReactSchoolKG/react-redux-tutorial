import React from 'react';

class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 0
        };

        this._increment = this._increment.bind(this);
        this._decrement = this._decrement.bind(this);
    }

    render () {
        return (<div className='counter-container'>
            <div className='value'>
                {this.state.value}
            </div>
            <button onClick={this._increment}>+</button>
            <button onClick={this._decrement}>-</button>
        </div>);
    }

    _increment () {
        this.setState ({
            value: this.state.value + 1
        });
    }

    _decrement () {
        this.setState ({
            value: this.state.value - 1
        });
    }
}

export default Counter;
