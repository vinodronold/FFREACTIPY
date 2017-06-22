import ChordsPlayerLayout from '../components/ChordsPlayerLayout'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return ({
        chords: state.chords['IarsrX60bZw']
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

const ChordsPlayer = withRouter(connect(mapStateToProps, null)(ChordsPlayerLayout))

export default ChordsPlayer