import React from 'react'

import '@material/toolbar/dist/mdc.toolbar.min.css'

const Header = () => {
    return (
        <header className="mdc-toolbar">
            <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <a className="material-icons">menu</a>
                    <span className="mdc-toolbar__title">Title</span>
                </section>
            </div>
        </header>
    )
}

export default Header