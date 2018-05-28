import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import Home from "./components/Home";
import store, {history} from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className='app-container'>
            <Home />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
