import React from 'react';
import { connect } from 'react-redux'
import Input from "../Input";
import Counter from "../Counter";
import { bindActionCreators } from 'redux'
import { increment, decrement, asyncChange, counterToggle } from "../../actions/counter";


class Home extends React.Component {
    render () {
        console.log(this.props);
        return (<div className='home-container'>
            <div className='counter-part'>
                <Counter counter={this.props.counter}
                    increment={this.props.increment}
                    decrement={this.props.decrement}
                    asyncChange={this.props.asyncChange}
                    toggle={this.props.counterToggle}
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
    decrement,
    asyncChange,
    counterToggle
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Home);
