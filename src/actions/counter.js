import { COUNTER_TOGGLE, DECREMENT, INCREMENT } from "./actionTypes";
import { INC } from "../constants/asyncChange";

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const counterToggle = () => ({
   type: COUNTER_TOGGLE
});

export const asyncChange = (t) => {
    return dispatch => {
      dispatch(counterToggle());

      return setTimeout(() => {
          if (t === INC) {
              dispatch(increment());
          } else {
              dispatch(decrement());
          }
          dispatch(counterToggle());
      }, 5000);
    };
};
