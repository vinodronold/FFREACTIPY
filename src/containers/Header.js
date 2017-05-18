import Toolbar from '../components/Toolbar'
import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'

const mapDispatchToProps = dispatch => {
    return {
        onMenuClick: () => {
            dispatch(toggleDrawer)
        }
    }
}

const Header = connect(null, mapDispatchToProps)(Toolbar)

export default Header