import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../action/action';

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const mapStateToProps = (state) => {
  return { value: state };
}

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actionCreator.doIncrement),
  onDecrement: () => dispatch(actionCreator.doDecrement)
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);