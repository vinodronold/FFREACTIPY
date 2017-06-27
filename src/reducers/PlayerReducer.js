import initialState from './initialState'
import { YT_PLAYER_STATUS_CHANGED } from '../constants/actionTypes'

const PlayerReducer = (state = initialState.player, action) => {
  switch (action.type) {
    case YT_PLAYER_STATUS_CHANGED:
      return Object.assign({}, state, { status: action.status })
    default:
      return state
  }
}

export default PlayerReducer
