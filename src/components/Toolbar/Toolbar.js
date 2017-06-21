import React from 'react'
import { clsToolbar, clsTheme } from '../../constants/ui'
import Icon from '../Icons'
import Menu from '../Menu'
import Button from '../Button'
import './Toolbar.css'

const Toolbar = ({ toolbar, moreOptions, toggleDrawer, toggleMoreOptions }) => {
  return (
    <div>
      <header className={`${clsToolbar} ${clsToolbar}--fixed`}>
        <div className={`${clsToolbar}__row`}>
          <section
            className={`${clsToolbar}__section ${clsToolbar}__section--align-start ${clsToolbar}__section--shrink-to-fit`}>
            <Icon i={'menu'} onClick={toggleDrawer} />
          </section>
          <section className={`${clsToolbar}__section ${clsToolbar}__section--align-end`}>
            {toolbar.buttons.map(b =>
              <Button className={`${clsTheme}--text-primary-on-primary`} key={b.label} onClick={b.onClick}>
                {b.label}
              </Button>
            )}
            <Menu i={'more_vert'} toggleMoreOptions={toggleMoreOptions} moreOptions={moreOptions} />
          </section>
        </div>
      </header>
      <div className={`${clsToolbar}-fixed-adjust`} />
      <div style={{ padding: 10 }} />
    </div>
  )
}

export default Toolbar
