import React from 'react'
import { getAudioUrl } from '../../url/baseUrl'

const Sound = ({id}) =>{
  const url = getAudioUrl(id);
  let audio = new Audio(url)

  const start = () => {
    audio.play()
  }

  return(
    <div className="question-container" onClick={start}>
      <span className="pulse"></span>   
    </div>
  )
}

export default Sound