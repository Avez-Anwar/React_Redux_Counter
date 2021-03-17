const initialState = {
  value: 0,
  toggleCounter: ""
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1
      };
    case "INCREMENTTWO":
      return {
        ...state,
        value: state.value + 2
      };
    case "RESET":
      return {
        ...state,
        value: initialState.value
      };
    case "CLEARCOUNTER":
      return {
        ...state,
        value: state.toggleCounter
      };
    default:
      return state;
  }
}

export default addReducer;
