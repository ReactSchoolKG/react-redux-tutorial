import { 
  DECREMENT,
  INCREMENT,
  RESET_COUNTER,
} from '../actions/actionTypes';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: ++state.value,
      };

    case DECREMENT:
      return {
        ...state,
        value: --state.value,
      };

    case RESET_COUNTER:
      return {
        ...state,
        value: 0,
      };
      
    default: return state;
  }
};
