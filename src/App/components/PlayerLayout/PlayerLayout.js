import React, { Component } from 'react'
// import { Redirect } from 'react-router'
import classnames from 'classnames'
import Button from '../Button'
import Paper from '../Paper'
import YTPlayer from '../YTPlayer'
import Loader from '../Loader'
import { Headline, SubHeading1 } from '../Typography'
import { PLAYER_STATUS } from '../../constants'
import './PlayerLayout.css'

const DisplayTitle = ({ title = '', subtitle = '' }) =>
  <div style={{ margin: '1rem', textAlign: 'center' }}>
    <Headline>
      {title}
    </Headline>
    <SubHeading1>
      {subtitle}
    </SubHeading1>
  </div>

const DisplayControl = ({ status, PlayerStatusChanged }) =>
  <div style={{ textAlign: 'center' }}>
    <Button
      primary
      compact
      onClick={
        status === PLAYER_STATUS.PLAYING
          ? () => PlayerStatusChanged(PLAYER_STATUS.PAUSED)
          : () => PlayerStatusChanged(PLAYER_STATUS.PLAYING)
      }>
      {status === PLAYER_STATUS.PLAYING ? 'PAUSE' : 'PLAY'}
    </Button>
    <Button primary compact onClick={() => PlayerStatusChanged(PLAYER_STATUS.ENDED)}>
      STOP
    </Button>
  </div>

const DisplayChord = ({ c, pulse = false, active = false }) =>
  <Paper className={classnames('chords', { pulse: pulse, active: active })} transition>
    {c}
  </Paper>

class PlayerLayout extends Component {
  componentDidMount() {
    const { match, player, GetSong } = this.props
    if (!player.ytid) {
      GetSong(match.params.id)
    }
  }

  render() {
    const { song, match, player, PlayerStatusChanged } = this.props
    return song
      ? <div>
          <DisplayTitle title={song.title} subtitle={song.subtitle} />
          <DisplayControl status={player.status} PlayerStatusChanged={PlayerStatusChanged} />
          <div className={'chordscontainer'}>
            {song.chords.map(c => <DisplayChord key={c.id} {...c} />)}
          </div>
          <YTPlayer id={match.params.id} status={player.status} PlayerStatusChanged={PlayerStatusChanged} />
        </div>
      : <Loader />
  }
}

export default PlayerLayout
