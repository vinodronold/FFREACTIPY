import SongsList from '../components/SongsList'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return ({
        songs: state.songs
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

const Songs = withRouter(connect(mapStateToProps, null)(SongsList))

export default Songs