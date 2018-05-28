import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
// import { ConnectRouter } from "react-router-redux";
import store from "./store";
// import store, { history } from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <ConnectRouter history={history}> */}
        <div className="app-container">
          <Home />
        </div>
        {/* </ConnectRouter> */}
      </Provider>
    );
  }
}

export default App;
