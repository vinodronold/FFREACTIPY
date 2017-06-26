import initialState from './initialState'
import {
  YT_PLAYER_STATUS_CHANGED,
  YT_PLAYER_PLAYING,
  YT_PLAYER_BUFFERING,
  YT_PLAYER_PAUSED,
  YT_PLAYER_ENDED,
  YT_PLAYER_CUED
} from '../constants/actionTypes'

const PlayerReducer = (state = initialState.player, action) => {
  switch (action.type) {
    case YT_PLAYER_STATUS_CHANGED:
    case YT_PLAYER_PLAYING:
    case YT_PLAYER_BUFFERING:
    case YT_PLAYER_PAUSED:
    case YT_PLAYER_ENDED:
    case YT_PLAYER_CUED:
      return Object.assign({}, state, { status: action.status })
    default:
      return state
  }
}

export default PlayerReducer
