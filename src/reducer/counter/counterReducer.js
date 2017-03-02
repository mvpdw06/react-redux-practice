const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INITCUNTERSUCCESS':
      state = action.value;
      return state;
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

module.exports = counterReducer;