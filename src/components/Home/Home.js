import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '../Input';
import Counter from '../Counter';
import { 
  increment,
  decrement,
  resetCounter,
} from '../../actions/counter';
import { 
  enterText,
  resetInput,
} from '../../actions/input';


class Home extends Component {
  render () {
    const { 
      counter,
      increment,
      decrement,
      resetCounter,
      input,
      enterText,
      resetInput,
    } = this.props;

    //console.log(this.props);

    return (
      <div className="home-container">
        <div className="counter-part">
            <Counter
              value={counter.value}
              increment={increment}
              decrement={decrement}
              resetCounter={resetCounter}
            />
        </div>
        <div className='input-part'>
            <Input 
              counter={counter}
              input={input}
              enterText={text => enterText(text)}
              resetInput={resetInput}
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
  ...state,
  }
);

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    increment,
    decrement,
    resetCounter,
    enterText,
    resetInput,
  },
dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Home);
