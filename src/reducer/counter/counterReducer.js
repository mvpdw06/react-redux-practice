const counterReducer = (state = 0, action) => {
  console.log(action)
  switch (action.type) {
    case 'INITCUNTERSUCCESS':
      state = action.value;
      return action.value;
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

module.exports = counterReducer;