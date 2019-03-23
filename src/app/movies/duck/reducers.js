import types from './types'


const INITIAL_STATE = {
  listName: 'Favourite',
  list: [
    'Rambo III', 'Hakerzy', 'Matrix'
  ]
}

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      return {
        ...state, list: [...state.list, action.item]
      }
    case types.RESET_MOVIES:
      return {
        ...state, list: []
      }
    default:
      return state
  }
}

export default moviesReducer
