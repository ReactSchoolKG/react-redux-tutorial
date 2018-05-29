import React from 'react';

class Input extends React.Component{
	constructor(props){
		super(props);

		this._onChange = this._onChange.bind(this);
	}
	render(){
		return(
			<div className='input-container'>
			<input
            type="text"
            value={this.props.value}
            onChange={this._onChange}
          />
					<br />
				<span className='value'>{this.props.value}</span>
			</div>
		)
	}

	_onChange(e) {
    this.props.changeInput(e.target.value);
  }
}

export default Input;