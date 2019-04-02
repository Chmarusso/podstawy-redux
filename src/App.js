import React, { Component } from 'react'
import './App.css'
import MoviesContainer from './app/movies/components/MoviesContainer'
import MoviesForm from './app/movies/components/MoviesForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesContainer />
        <MoviesForm />
      </div>
    );
  }
}

export default App;
