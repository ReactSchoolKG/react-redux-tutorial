import React, { Component } from "react";

import Counter from "../Counter/";
import Input from "../Input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, reset } from "../../actions/counter";

import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="counter-part">
          <h3>Counter</h3>
          <Counter
            value={this.props.counter.value}
            increment={this.props.increment}
            decrement={this.props.decrement}
            reset={this.props.reset}
          />
        </div>
        <div className="input-part">
          <h3>Input</h3>
          <Input />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      reset
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
