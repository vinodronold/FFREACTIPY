import React from 'react'
import classnames from 'classnames'
import Paper from '../Paper'
import './ChordsPlayerLayout.css'

const DisplayChord = ({ chord, pulse = false, active = false }) =>
  <Paper className={classnames('chords', { pulse: pulse, active: active })} transition>
    {chord}
  </Paper>
  
const ChordsPlayerLayout = ({ chords }) =>
  <div className={'chordscontainer'}>
    {chords.map(c => <DisplayChord key={c.id} {...c} />)}
  </div>

export default ChordsPlayerLayout
