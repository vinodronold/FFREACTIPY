import React from 'react'
import classNames from 'classnames'
import { materialIcon, clsToolbar } from '../../constants/ui'
import './Toolbar.css'

const Toolbar = ({ onMenuClick }) => {
    return (
        <header className={classNames([`${clsToolbar}`, `${clsToolbar}--fixed`])}>
            <div className={`${clsToolbar}__row`}>
                <section className={classNames([`${clsToolbar}__section`, `${clsToolbar}__section--align-start`])}>
                    <a className={materialIcon} onClick={onMenuClick}>menu</a>
                </section>
                <section
                    className={classNames([
                        `${clsToolbar}__section`,
                        `${clsToolbar}__section--align-end`,
                        `${clsToolbar}__section--shrink-to-fit`
                    ])}>
                    <a className={materialIcon} aria-label="Search" alt="Search">search</a>
                </section>
            </div>
        </header>
    )
}

export default Toolbar
