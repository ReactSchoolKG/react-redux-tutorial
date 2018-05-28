import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import input from './input';

export default combineReducers(
  {
    routing: routerReducer,
    counter,
    input,
  }
);
