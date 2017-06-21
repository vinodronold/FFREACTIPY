import ChordsListLayout from '../components/ChordsListLayout'
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

const ChordsList = connect(mapStateToProps, null)(ChordsListLayout)

export default ChordsList