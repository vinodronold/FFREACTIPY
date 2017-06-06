import Toolbar from '../components/Toolbar'
import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'

const mapStateToProps = state => {
  return {
    toolbar: state.toolbar
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: () => {
      dispatch(toggleDrawer)
    }
  }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(Toolbar)

export default Header
