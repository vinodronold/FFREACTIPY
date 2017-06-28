import PlayerLayout from '../components/PlayerLayout'
import { PlayerStatusChanged } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    song: state.songs['IarsrX60bZw~'],
    player: state.player
  }
}
const mapDispatchToProps = dispatch => {
  return {
    PlayerStatusChanged: status => dispatch(PlayerStatusChanged(status))
  }
}

const Player = withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerLayout))

export default Player
