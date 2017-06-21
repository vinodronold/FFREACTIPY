import { UPDATE_HEADER  } from '../constants/actionTypes'
import initialState from './initialState'

const ToolbarReducer = (state = initialState.toolbar, action) => {
  switch (action.type) {
    case UPDATE_HEADER:
      return Object.assign({}, state, { header: action.header })
    default:
      return state
  }
}

export default ToolbarReducer