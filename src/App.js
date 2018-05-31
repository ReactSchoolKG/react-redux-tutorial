import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom';
import store, {history} from "./store";
import Example from "./components/Example/Example";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div className='app-container'>
                <Route exact path='/' component={Home} />
                <Route exact path='/example' component={Example} />
            </div>
          </ConnectedRouter>
        </Provider>
    );
  }
}

export default App;
