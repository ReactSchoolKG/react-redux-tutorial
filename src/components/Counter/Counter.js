import React from 'react';
import {DEC, INC} from "../../constants/asyncChange";

class Counter extends React.Component {
    constructor (props) {
        super(props);

        this._increment = this._increment.bind(this);
        this._decrement = this._decrement.bind(this);
        this._async = this._async.bind(this);
        this._toggle = this._toggle.bind(this);
    }

    render () {
        console.log(this.props.counter.asyncCallRunning);
        return (<div className='counter-container'>
            <div className='value'>
                {this.props.counter.value}
            </div>
            <button onClick={this._increment}>+</button>
            <button onClick={this._decrement}>-</button>
            <br/>
            <button disabled={this.props.counter.asyncCallRunning} onClick={() => this._async(INC)}>Async +</button>
            <button disabled={this.props.counter.asyncCallRunning} onClick={() => this._async(DEC)}>Async -</button>
            <button onClick={this._toggle}>T</button>
        </div>);
    }

    _increment () {
        this.props.increment();
    }

    _decrement () {
        this.props.decrement();
    }

    _async (c) {
        this.props.asyncChange(c);
    }

    _toggle () {
        this.props.toggle();
    }
}

export default Counter;
