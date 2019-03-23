import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { movieActions } from './app/movies/duck'

const store = createStore(rootReducer, composeWithDevTools())
window.store = store
store.dispatch(movieActions.add('Matrix 2'))


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
