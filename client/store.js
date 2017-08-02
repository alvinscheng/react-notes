import { createStore } from 'redux'

function reducer(state, action) {
  switch (action.type) {
    case 'NOTE_ADDED':
      return true
    default:
      return state
  }
}

const store = createStore(reducer)
export default store
