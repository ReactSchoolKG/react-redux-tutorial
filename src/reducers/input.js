import { 
  ENTER_TEXT,
  RESET_INPUT, 
} from '../actions/actionTypes';

const initialState = {
  value: ``,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ENTER_TEXT:
      return {
        ...state,
        value: action.value,
      };
     
    case RESET_INPUT:
      return {
        ...state,
        value: ``,
      }  
      
    default: return state;
  }
}
