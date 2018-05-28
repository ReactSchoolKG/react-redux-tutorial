import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import Home from './components/Home'
import store, {history} from './store'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ConnectedRouter history ={history}>
      <div className="App">
        <Home/>
      </div>
      </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
