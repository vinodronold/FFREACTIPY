import ChordsLayout from '../components/ChordsLayout'
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

const ChordsPlayer = connect(null, null)(ChordsLayout)

export default ChordsPlayer