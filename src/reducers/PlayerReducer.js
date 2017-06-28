import InitState from './InitState'
import { YT_PLAYER_STATUS_CHANGED } from '../constants/actionTypes'

const PlayerReducer = (state = InitState.player, action) => {
  switch (action.type) {
    case YT_PLAYER_STATUS_CHANGED:
      return Object.assign({}, state, { status: action.status })
    default:
      return state
  }
}

export default PlayerReducer
