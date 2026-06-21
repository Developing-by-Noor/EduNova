import React, { useRef } from 'react'
import './Videoplayer.css'
import Video from '../../assets/Video.mp4'

const Videoplayer = ({ playState, setPlayState }) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  }

  return (
    <div
      ref={player}
      onClick={closePlayer}
      className={`video-player ${playState ? "" : "hide"}`}
    >
      <video src={Video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
