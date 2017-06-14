import React, { PureComponent } from 'react'
import Logo from '../Logo'
import DrawerItems from './DrawerItems'
import classNames from 'classnames'
import { clsTempDrawer, clsTheme } from '../../constants/ui'
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer'

//import './Drawer.css'

class Drawer extends PureComponent {
  constructor(props) {
    super(props)
    this.node = null
    this.drawer = null
  }
  shouldComponentUpdate = (nextProps, nextState) => nextProps.drawer.isOpen
  componentDidMount = () => {
    this.drawer = new MDCTemporaryDrawer(this.node)
    this.node.addEventListener('MDCTemporaryDrawer:close', () => {
      this.props.toggleDrawer()
    })
  }
  componentDidUpdate = () => {
    if (this.props.drawer.isOpen) {
      this.drawer.open = this.props.drawer.isOpen
    }
  }
  componentWillUnmount = () => this.drawer.destroy()

  render() {
    return (
      <aside className={clsTempDrawer} ref={n => (this.node = n)}>
        <nav className={`${clsTempDrawer}__drawer`}>
          <header className={`${clsTempDrawer}__header`}>
            <div
              className={classNames(
                `${clsTempDrawer}__header-content`,
                `${clsTheme}--primary-bg`,
                `${clsTheme}--text-primary-on-primary`
              )}>
              <Logo />
            </div>
          </header>
          <nav className={`${clsTempDrawer}__content`}>
            <DrawerItems />
          </nav>
        </nav>
      </aside>
    )
  }
}

export default Drawer
