import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../duck/operations.js'

const MoviesContainer = (props) => {
  const movies = useSelector(state => state.movies)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllMovies())
  }, [])

  return <ul>
    {movies.list.map(movie => <li>{movie}</li>)}
  </ul>
}

export default MoviesContainer
