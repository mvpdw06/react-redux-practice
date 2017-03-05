import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreator from '../../action/action';
import NavBar from '../navBar';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.getNewDataClass = this.getNewDataClass.bind(this);
  }
  componentDidMount() {
    this.props.initCounter();
  }
  getNewDataClass(dataType){
    if(dataType === 'BETTER') {
      return 'jumpBetter';
    }
    else if(dataType === 'WORSE') {
      return 'jumpWorse';
    }
    else {
      return 'normal';
    }
  }
  render() {
    const {
      state: {
        value,
        dataType
      },
      onIncrement,
      onDecrement
    } = this.props;

    const dataClass = this.getNewDataClass(dataType);
    return(
      <div>
        <NavBar text="This is a counter." />        
        <h1 className={dataClass}>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state: state.counter };
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