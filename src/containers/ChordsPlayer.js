import ChordsPlayerLayout from '../components/ChordsPlayerLayout'
import { PlayerStatusChanged } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    chords: state.chords['IarsrX60bZw'],
    player: state.player
  }
}
const mapDispatchToProps = dispatch => {
  return {
    PlayerStatusChanged: (status) => {
      dispatch(PlayerStatusChanged(status))
    }
  }
}

const ChordsPlayer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ChordsPlayerLayout))

export default ChordsPlayer
