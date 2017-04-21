import React from 'react'
import className from 'classnames'
import { materialIcon } from '../const'
import './Toolbar.css'

const Toolbar = () => {
    const _cls = "mdc-toolbar"
    return (
        <header className={className([`${_cls}`], [`${_cls}--fixed`])}>
            <div className={[`${_cls}__row`]}>
                <section className={className([`${_cls}__section`], [`${_cls}__section--align-start`])}>
                    <a className={materialIcon}>menu</a>
                </section>
                <section className={className([`${_cls}__section`],
                    [`${_cls}__section--align-end`],
                    [`${_cls}__section--shrink-to-fit`])}>
                    <a className={materialIcon} aria-label="Search" alt="Search">search</a>
                </section>
            </div>
        </header>
    )
}

export default Toolbar