const initialState = {
  value: ""
};

const input = (state = initialState, action) => {
  switch (action.type) {
    case "SETINPUT":
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};
export default input;
