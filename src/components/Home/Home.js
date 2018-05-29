import React from 'react';
import Counter from '../Counter'
import Input from '../Input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increment, decrement, reset} from '../../actions/counter'
import { changeInput } from "../../actions/input";

class Home extends React.Component{
	render(){
		return (<div className='home-container'>
			<div>
				<Counter value={this.props.counter.value} 
				increment={this.props.increment} 
				decrement={this.props.decrement} 
				reset={this.props.reset}/>
			</div>
			<Input
            value={this.props.input.value}
            changeInput={e => this.props.changeInput(e)}
          />
		</div>)
	}
}  

const mapStateToProps = (state) => ({
	...state
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
	increment,
	decrement,
	reset,
	changeInput
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps) (Home);