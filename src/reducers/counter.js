import {ASYNC_CHANGE, COUNTER_TOGGLE, DECREMENT, INCREMENT} from "../actions/actionTypes";

const initialState = {
    value: 0,
    asyncCallRunning: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return  {
                ...state,
                value: state.value + 1
            };
        case DECREMENT: {
            return  {
                ...state,
                value: state.value - 1
            };
        }
        case COUNTER_TOGGLE: {
            return {
                ...state,
                asyncCallRunning: !state.asyncCallRunning
            }
        }
        default: return state;
    }
};

