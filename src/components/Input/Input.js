import React from 'react';
import './Input.css'

class Input extends React.Component {
    render () {
        return (<div className='input-container'>
            <div className='value'>
                {this.props.counter.value}
            </div>
        </div>);
    }
}

export default Input;
