import React from 'react'
import { clsToolbar, clsTheme } from '../../constants/ui'
import Icon from '../Icons'
import Menu from '../Menu'
import Button from '../Button'
import './Toolbar.css'

const ToolbarButton = ({ label, onClick }) =>
  <Button className={`${clsTheme}--text-primary-on-primary`} onClick={onClick}>
    {label}
  </Button>

const ToolbarLeft = ({ toggleDrawer }) =>
  <section
    className={`${clsToolbar}__section ${clsToolbar}__section--align-start ${clsToolbar}__section--shrink-to-fit`}>
    <Icon i={'menu'} onClick={toggleDrawer} />
  </section>

const ToolbarRight = ({ toolbar, moreOptions, toggleMoreOptions }) =>
  <section className={`${clsToolbar}__section ${clsToolbar}__section--align-end`}>
    {toolbar.buttons.map(b => <ToolbarButton key={b.label} {...b} />)}
    <Menu i={'more_vert'} toggleMoreOptions={toggleMoreOptions} {...moreOptions} />
  </section>

const Toolbar = ({ toggleDrawer, toolbar, moreOptions, toggleMoreOptions }) =>
  <div>
    <header className={`${clsToolbar} ${clsToolbar}--fixed`}>
      <div className={`${clsToolbar}__row`}>
        <ToolbarLeft toggleDrawer={toggleDrawer} />
        <ToolbarRight toolbar={toolbar} moreOptions={moreOptions} toggleMoreOptions={toggleMoreOptions} />
      </div>
    </header>
    <div className={`${clsToolbar}-fixed-adjust`} />
    <div style={{ padding: 10 }} />
  </div>

export default Toolbar
