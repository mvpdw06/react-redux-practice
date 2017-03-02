import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreator from '../action/action';
import NavBar from './navBar';

class Counter extends Component {
  componentDidMount() {
    this.props.initCounter();
  }
  render() {
    const {
      value,
      onIncrement,
      onDecrement
    } = this.props;
    return(
      <div>
        <NavBar text="This is a counter." />        
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { value: state.counter };
}
const mapDispatchToProps = (dispatch) => ({
  initCounter: () => dispatch(actionCreator.counter.initCounter()),
  onIncrement: () => dispatch(actionCreator.counter.doIncrement()),
  onDecrement: () => dispatch(actionCreator.counter.doDecrement())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);