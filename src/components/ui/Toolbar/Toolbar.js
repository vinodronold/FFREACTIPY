import React from 'react'
import './Toolbar.css'

const Toolbar = () => {
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

export default Toolbar