import React from 'react'
import { Redirect } from 'react-router'
import classnames from 'classnames'
import Button from '../Button'
import Paper from '../Paper'
import YTPlayer from '../YTPlayer'
import { Headline, SubHeading1 } from '../Typography'
import { PLAYER_STATUS } from '../../constants'
import './PlayerLayout.css'

const DisplayControl = ({ label, onClick }) =>
  <Button primary compact onClick={onClick}>
    {label}
  </Button>

const DisplayChord = ({ c, pulse = false, active = false }) =>
  <Paper className={classnames('chords', { pulse: pulse, active: active })} transition>
    {c}
  </Paper>

const PlayerLayout = ({ song, match, player, PlayerStatusChanged }) => {
  const Play = () => PlayerStatusChanged(PLAYER_STATUS.PLAYING)
  const Pause = () => PlayerStatusChanged(PLAYER_STATUS.PAUSED)
  const Stop = () => PlayerStatusChanged(PLAYER_STATUS.ENDED)
  const StyleCenter = { textAlign: 'center' }
  const StyleMargin = { margin: '1rem' }

  return player.ytid
    ? <div>
        <Headline style={{ ...StyleCenter, ...StyleMargin }}>{song.title}</Headline>
        <SubHeading1 style={{ ...StyleCenter, ...StyleMargin }}>{song.subtitle}</SubHeading1>
        <div style={StyleCenter}>
          <DisplayControl
            label={player.status === PLAYER_STATUS.PLAYING ? 'PAUSE' : 'PLAY'}
            onClick={player.status === PLAYER_STATUS.PLAYING ? Pause : Play}
          />
          <DisplayControl label={'stop'} onClick={Stop} />
        </div>
        <div className={'chordscontainer'}>
          {song.chords.map(c => <DisplayChord key={c.id} {...c} />)}
        </div>
        <YTPlayer id={match.params.id} status={player.status} PlayerStatusChanged={PlayerStatusChanged} />
      </div>
    : <Redirect to="/" />
}
export default PlayerLayout
