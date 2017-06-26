import React from 'react'
import classnames from 'classnames'
import Button from '../Button'
import Paper from '../Paper'
import YTPlayer from '../YTPlayer'
import { PLAYER_STATUS } from '../../constants'
import './ChordsPlayerLayout.css'

const DisplayControl = ({ label, PlayerStatusChanged, status, control }) =>
  <Button
    primary
    compact
    accent={status === control}
    onClick={() => {
      PlayerStatusChanged(control)
    }}>
    {label}
  </Button>

const DisplayChord = ({ chord, pulse = false, active = false }) =>
  <Paper className={classnames('chords', { pulse: pulse, active: active })} transition>
    {chord}
  </Paper>

const ChordsPlayerLayout = ({ chords, match, player, PlayerStatusChanged }) =>
  <div>
    <div style={{ textAlign: 'center' }}>
      <DisplayControl
        label={'play'}
        status={player.status}
        control={PLAYER_STATUS.PLAYING}
        PlayerStatusChanged={PlayerStatusChanged}
      />
      <DisplayControl
        label={'pause'}
        status={player.status}
        control={PLAYER_STATUS.PAUSED}
        PlayerStatusChanged={PlayerStatusChanged}
      />
      <DisplayControl
        label={'stop'}
        status={player.status}
        control={PLAYER_STATUS.ENDED}
        PlayerStatusChanged={PlayerStatusChanged}
      />
    </div>
    <div className={'chordscontainer'}>
      {chords.map(c => <DisplayChord key={c.id} {...c} />)}
    </div>
    <YTPlayer id={match.params.id} status={player.status} PlayerStatusChanged={PlayerStatusChanged} />
  </div>
  
export default ChordsPlayerLayout
