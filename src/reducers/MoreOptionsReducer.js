import { TOGGLE_MORE_OPTIONS  } from '../constants/actionTypes'
import initialState from './initialState'

const MoreOptionsReducer = (state = initialState.moreOptions, action) => {
  switch (action.type) {
    case TOGGLE_MORE_OPTIONS:
      return Object.assign({}, state, { isOpen: !state.isOpen })
    default:
      return state
  }
}

export default MoreOptionsReducer