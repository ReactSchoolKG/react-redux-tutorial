import React from 'react';
import { connect } from 'react-redux'
import Input from "../Input";
import Counter from "../Counter";
import { bindActionCreators } from 'redux'
import { increment, decrement } from "../../actions/counter";


class Home extends React.Component {
    render () {
        console.log(this.props);
        return (<div className='home-container'>
            <div className='counter-part'>
                <Counter value={this.props.counter.value}
                    increment={this.props.increment}
                    decrement={this.props.decrement}
                />
            </div>
            <div className='input-part'>
                <Input counter={this.props.counter}/>
            </div>
        </div>);
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    decrement
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Home);
