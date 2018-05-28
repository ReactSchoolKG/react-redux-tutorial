import { 
  INCREMENT,
  DECREMENT,
  RESET_COUNTER,
} from "./actionTypes";

export const increment = () => (
  {
    type: INCREMENT,
  }
);

export const decrement = () => (
  {
    type: DECREMENT,
  }
);

export const resetCounter = () => (
  {
    type: RESET_COUNTER,
  }
);
