import React, { Component } from "react";
import { connect } from "react-redux";
import { processInput } from "../../actions/input";

class Input extends Component {
	_updateInput = e => {
		this.props.processInput(e.target.value);
	};

	render() {
		return (
			<div className="input-container">
				<input
					type="text"
					defaultValue=""
					onChange={this._updateInput}
					placeholder="type..."
				/>
				<div>Value: {this.props.data.value}</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	data: state.inputData
});

export default connect(mapStateToProps, { processInput })(Input);
