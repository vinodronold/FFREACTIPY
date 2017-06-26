import React from 'react'
import classnames from 'classnames'
import Button from '../Button'
import Paper from '../Paper'
import YTPlayer from '../YTPlayer'
import { PLAYER_STATUS } from '../../constants'
import './ChordsPlayerLayout.css'

const DisplayControl = ({ label, onClick }) =>
  <Button primary compact onClick={onClick}>
    {label}
  </Button>

const DisplayChord = ({ chord, pulse = false, active = false }) =>
  <Paper className={classnames('chords', { pulse: pulse, active: active })} transition>
    {chord}
  </Paper>

const ChordsPlayerLayout = ({ chords, match, player, PlayerStatusChanged, Play, Pause, Stop }) =>
  <div>
    <div style={{ textAlign: 'center' }}>
      <DisplayControl
        label={player.status === PLAYER_STATUS.PLAYING ? 'PAUSE' : 'PLAY'}
        onClick={player.status === PLAYER_STATUS.PLAYING ? Pause : Play}
      />
      <DisplayControl label={'stop'} status={player.status} control={PLAYER_STATUS.ENDED} onClick={Stop} />
    </div>
    <div className={'chordscontainer'}>
      {chords.map(c => <DisplayChord key={c.id} {...c} />)}
    </div>
    <YTPlayer id={match.params.id} status={player.status} PlayerStatusChanged={PlayerStatusChanged} />
  </div>

export default ChordsPlayerLayout
