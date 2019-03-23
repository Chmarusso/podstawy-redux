import types from './types'

const add = item => ({
  type: types.ADD_ACTOR, item
})

const reset = item => ({
  type: types.RESET_ACTORS, item
})

export default {
  add,
  reset
}
