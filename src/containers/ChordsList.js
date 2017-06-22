import ChordsListLayout from '../components/ChordsListLayout'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return ({
        chordlist: state.chordlist
    }
)
}
// const mapDispatchToProps = dispatch => {
//     return {
//         toggleDrawer: () => {
//             dispatch(toggleDrawer)
//         }
//     }
// }

const ChordsList = withRouter(connect(mapStateToProps, null)(ChordsListLayout))

export default ChordsList