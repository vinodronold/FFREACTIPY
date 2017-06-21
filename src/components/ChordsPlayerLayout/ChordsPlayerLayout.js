import React from 'react'
import classnames from 'classnames'
import Paper from '../Paper'
import './ChordsPlayerLayout.css'

const ChordsPlayerLayout = ({ chords }) =>
  <div className={'chordscontainer'}>
    {chords.map(c =>
      <Paper key={c.id} className={classnames('chords', { pulse: c.pulse, active: c.active })} transition>
        {c.chord}
      </Paper>
    )}
  </div>

export default ChordsPlayerLayout
