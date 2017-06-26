import { YT_PLAYER_STATUS_CHANGED } from '../constants/actionTypes'
import { PLAYER_STATUS } from '../constants'

const PlayerStatusChanged = status => ({
  type: YT_PLAYER_STATUS_CHANGED,
  status
})

const Play = PlayerStatusChanged(PLAYER_STATUS.PLAYING)
const Pause = PlayerStatusChanged(PLAYER_STATUS.PAUSED)
const Stop = PlayerStatusChanged(PLAYER_STATUS.ENDED)

export default PlayerStatusChanged
export { Play, Pause, Stop }
