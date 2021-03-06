import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { counter } from '../../action/action';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.getNewDataClass = this.getNewDataClass.bind(this);
  }
  componentDidMount() {
    this.props.initCounter();
  }
  componentDidUpdate() {
    const {
      counters,
      setNormalDataType
    } = this.props;

    const isJumpedCounters = this.props.counters.filter((counter) => {
      return counter.dataType !== 'NORMAL'
    });

    if(isJumpedCounters.length > 0) {
      setTimeout(() => {
          setNormalDataType()
        }, 
        3000
      );
    }
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
      counters,
      onIncrement,
      onDecrement,
      copyCounter
    } = this.props;

    const counterElement = counters.map((counter) => (
      <li key={counter.id}>
        <h2>This is No.{counter.id + 1} counter.</h2>
        <h1 className={this.getNewDataClass(counter.dataType)}>{counter.value}</h1>
        <button onClick={() => onIncrement && onIncrement(counter.id)}>+</button>
        <button onClick={() => onDecrement && onDecrement(counter.id)}>-</button>
        <br/>
      </li>
    ));

    return(
      <div>
        <button onClick={copyCounter}>Copy counter</button>
        <ul>{counterElement}</ul>
        <button onClick={browserHistory.goBack}>Go back!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { counters: state.counter };
}
const mapDispatchToProps = (dispatch) => ({
  initCounter: () => dispatch(counter.initCounter()),
  onIncrement: (id) => dispatch(counter.doIncrement(id)),
  onDecrement: (id) => dispatch(counter.doDecrement(id)),
  copyCounter: () => dispatch(counter.copyCounter()),
  setNormalDataType: () => dispatch(counter.setNormalDataType())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);