import React, { PureComponent } from 'react'
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer'
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
        return (
            <aside className="mdc-temporary-drawer mdc-typography" ref={n => (this.node = n)}>
                <nav className="mdc-temporary-drawer__drawer">

                    <header className="mdc-temporary-drawer__header">
                        <div className="mdc-temporary-drawer__header-content">
                            Header content goes here
                        </div>
                    </header>

                    <nav id="icon-with-text-demo" className="mdc-temporary-drawer__content mdc-list">
                        <a className="mdc-list-item mdc-temporary-drawer--selected" href="#">
                            <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
                        </a>
                        <a className="mdc-list-item" href="#">
                            <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
                        </a>
                    </nav>
                </nav>
            </aside>
        )
    }
}

export default Drawer
