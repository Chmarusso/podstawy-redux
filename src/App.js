import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { createStore } from 'redux'

const initialMovies = {
  movies: [
    'Rambo III', 'Hakerzy', 'Matrix'
  ]
}

function movies(state = initialMovies, action) {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(movies)
window.store = store

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
