import React from 'react'
import { YTSrc } from '../Utils'
import './YTPlayer.css'

const YTPlayer = ({ id }) =>
  <div>
    <div className="YTClearSpace" />
    <div className="YTPlayer">
      <iframe src={YTSrc(id)} title={id} frameborder="0" />
    </div>
  </div>

export default YTPlayer
