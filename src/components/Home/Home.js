import React from "react";
import Counter from "../counter";
import Input from "../input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, reset } from "../../actions/counter";
import { setInput } from "../../actions/input";

class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="home-container">
        <div>
          <Counter
            value={this.props.counter.value}
            increment={this.props.increment}
            decrement={this.props.decrement}
            reset={this.props.reset}
          />
        </div>
        <div>
          <Input
            value={this.props.input.value}
            setInput={e => this.props.setInput(e)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      reset,
      setInput
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
