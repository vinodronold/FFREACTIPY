import Drawer from '../components/Drawer'
import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'

const mapStateToProps = state => {
    return ({
        drawer: state.drawer
    }
)
}
const mapDispatchToProps = dispatch => {
    return {
        toggleDrawer: () => {
            dispatch(toggleDrawer)
        }
    }
}

const MenuSideBar = connect(mapStateToProps, mapDispatchToProps)(Drawer)

export default MenuSideBar