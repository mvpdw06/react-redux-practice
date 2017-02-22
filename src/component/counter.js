import React from 'react';
import { connect } from 'react-redux';
import { action } from '../action/action';

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
  onIncrement: () => dispatch(action.doIncrement()),
  onDecrement: () => dispatch(action.doDecrement())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);