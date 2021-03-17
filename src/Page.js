import React, { PureComponent } from "react";
import {
  incrementAction,
  decrementAction,
  incrementTwoAction,
  reset,
  clearCounter
} from "./action";
import { connect } from "react-redux";

class Page extends React.Component {
  render() {
    const {
      value,
      incrementAction,
      decrementAction,
      incrementTwoAction,
      reset,
      clearCounter
    } = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={incrementAction}>increment </button>
        <button onClick={decrementAction}>decrement </button>
        <button onClick={incrementTwoAction}>incrementTwo</button>
        <button onClick={reset}>reset</button>
        <button onClick={clearCounter}>clear counter</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decrementAction: () => dispatch(decrementAction()),
  incrementTwoAction: () => dispatch(incrementTwoAction()),
  reset: () => dispatch(reset()),
  clearCounter: () => dispatch(clearCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
