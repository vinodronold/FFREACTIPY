import ChordsPlayerLayout from '../components/ChordsPlayerLayout'
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

const ChordsPlayer = connect(mapStateToProps, null)(ChordsPlayerLayout)

export default ChordsPlayer