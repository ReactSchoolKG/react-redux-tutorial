import {
  ENTER_TEXT,
  RESET_INPUT,
} from './actionTypes';

export const enterText = text => (
  {
    type: ENTER_TEXT,
    value: text,
  }
);

export const resetInput = () => (
  {
    type: RESET_INPUT,
  }
);
