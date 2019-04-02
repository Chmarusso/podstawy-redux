import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../duck/actions'

const MoviesForm = ({add}) => {
  const movieInput = React.createRef()

  const addMovie = (event) => {
    event.preventDefault()
    add(movieInput.current.value)
    movieInput.current.value = ''
  }

  return <form onSubmit={addMovie}>
    <input ref={movieInput} />
    <button type='submit'>Add movie</button>
  </form>
}

const mapDispatchToProps = dispatch => ({
  add: (movie) => dispatch(actions.add(movie))
})

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({...actions}, dispatch)

export default connect(null, mapDispatchToProps)(MoviesForm)
