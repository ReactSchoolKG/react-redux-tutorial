import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
// import Counter from './components/Counter'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, {history} from './store'

class App extends Component {
  render() {
    return (
			<Provider store={store}>  
				<ConnectedRouter history={history}>
					<div className="app-container">
        		<Home />
      		</div>
			 	</ConnectedRouter> 
			</Provider>
    );
  }
}

export default App;
