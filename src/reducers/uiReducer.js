import { TOGGLE_DRAWER, TOGGLE_MORE_OPTIONS, UPDATE_HEADER  } from '../constants/actionTypes'
import initialState from './initialState'

export const drawer = (state = initialState.drawer, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, { isOpen: !state.isOpen })
    default:
      return state
  }
}

export const moreOptions = (state = initialState.moreOptions, action) => {
  switch (action.type) {
    case TOGGLE_MORE_OPTIONS:
      return Object.assign({}, state, { isOpen: !state.isOpen })
    default:
      return state
  }
}

export const toolbar = (state = initialState.toolbar, action) => {
  switch (action.type) {
    case UPDATE_HEADER:
      return Object.assign({}, state, { header: action.header })
    default:
      return state
  }
}
