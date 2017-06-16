import ChordsListLayout from '../components/ChordsListLayout'
import { connect } from 'react-redux'

// const mapStateToProps = state => {
//     return ({
//         drawer: state.drawer
//     }
// )
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         toggleDrawer: () => {
//             dispatch(toggleDrawer)
//         }
//     }
// }

const ChordsList = connect(null, null)(ChordsListLayout)

export default ChordsList