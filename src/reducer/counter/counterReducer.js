import { COUNTER } from '../../constant/constant';

const NORMAL = 'NORMAL';
const BETTER = 'BETTER';
const WORSE = 'WORSE';

const initState = [
  {
    id: 0,
    value: 0,
    dataType: NORMAL
  }
]

const handleDataType = (prevValue, nextValue) => {
  if(prevValue < nextValue) {
    return BETTER;
  }
  else if(prevValue > nextValue) {
    return WORSE;
  }
  else {
    return NORMAL;
  }
}

const initCounter = (counters, value) => {
  const newCounters = [...counters];
  newCounters[newCounters.length - 1] = {
    ...newCounters[newCounters.length - 1],
    value
  };
  return newCounters;
}

const updateCounter = (counters, value) => {
  const newCounters = counters.map((counter) => {
    return {
      ...counter,
      value,
      dataType: handleDataType(counter.value, value),
    }
  });

  return newCounters;
}

const counterIncrement = (counters, id) => {
  const idx = counters.findIndex((counter) => counter.id === id);
  if(idx === -1) return counters;

  const newCounters = [...counters];
  newCounters[idx] = {
    ...newCounters[idx],
    value: newCounters[idx].value + 1
  }
  return newCounters;
}

const counterDecrement = (counters, id) => {
  const idx = counters.findIndex((counter) => counter.id === id);
  if(idx === -1) return counters;

  const newCounters = [...counters];
  newCounters[idx] = {
    ...newCounters[idx],
    value: newCounters[idx].value - 1
  }
  return newCounters;
}

const copyCounter = (counters) => {
  return [
    ...counters,
    {
      id: counters[counters.length - 1].id + 1,
      value: counters[counters.length - 1].value,
      dataType: NORMAL
    }
  ]
}

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case COUNTER.INITCOUNTERSUCCESS:
      return initCounter(state, action.value);
    case COUNTER.UPDATECOUNTERSUCCESS:
      return updateCounter(state, action.value);
    case COUNTER.INCREMENT:
      return counterIncrement(state, action.id);
    case COUNTER.DECREMENT:
      return counterDecrement(state, action.id);
    case COUNTER.COPYCOUNTER:
      return copyCounter(state);
    default:
      return state;
  }
}

module.exports = counterReducer;