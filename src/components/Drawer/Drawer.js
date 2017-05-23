import React, { PureComponent } from 'react'
import Logo from '../Logo'
import classNames from 'classnames'
import { materialIcon, clsTempDrawer, clsList, clsTypography, clsTheme } from '../../constants/ui'
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer'
// import { MDCTemporaryDrawer } from '@material/drawer/temporary'
import './Drawer.css'

class Drawer extends PureComponent {
  constructor(props) {
    super(props)
    this.node = null
    this.drawer = null
  }
  shouldComponentUpdate = (nextProps, nextState) => nextProps.drawer.isOpen
  componentDidMount = () => (this.drawer = new MDCTemporaryDrawer(this.node))
  componentDidUpdate = () => {
    if (this.props.drawer.isOpen) {
      this.drawer.open = this.props.drawer.isOpen
      this.props.onMenuClick()
    }
  }
  componentWillUnmount = () => this.drawer.destroy()
  render() {
    const menuItemList = [{ id: 1, label: 'Inbox', icon: 'inbox' }, { id: 2, label: 'Star', icon: 'star' }]
    return (
      <aside className={classNames(clsTempDrawer, clsTypography)} ref={n => (this.node = n)}>
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
          <nav className={classNames(`${clsTempDrawer}__content`, clsList)}>
            {menuItemList.map(m => (
              <a
                key={m.id}
                className={classNames(`${clsList}-item`, { [`${clsTempDrawer}--selected`]: false })}
                href="#">
                <i className={classNames(materialIcon, `${clsList}-item__start-detail`)} aria-hidden="true">
                  {m.icon}
                </i>
                {m.label}
              </a>
            ))}
          </nav>
        </nav>
      </aside>
    )
  }
}

export default Drawer
