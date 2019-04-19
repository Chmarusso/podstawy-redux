import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllMovies } from '../duck/operations.js'

const MoviesContainer = ({movies, getAllMovies}) => {
  useEffect(() => { getAllMovies() }, [])

  return <ul>
    {movies.list.map(movie => <li>{movie}</li>)}
  </ul>
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies())
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(MoviesContainer)
