import React, { PureComponent } from 'react'
import Logo from '../Logo'
import List, { ListItem } from '../List'
import classNames from 'classnames'
import { clsTempDrawer, clsTheme } from '../../constants/ui'
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer'

import './Drawer.css'

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
    let _menu_items = [{ id: 1, label: 'Inbox', icon: 'inbox' }, { id: 2, label: 'Star', icon: 'star' }]
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
            <List href>
              {/*activeClass={`${clsTempDrawer}--selected`}*/}
              {_menu_items.map(i => <ListItem key={i.id} href={'#'}>{i.label}</ListItem>)}
            </List>
          </nav>
        </nav>
      </aside>
    )
  }
}

export default Drawer
