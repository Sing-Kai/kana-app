import React from 'react'
import { getAudioUrl } from '../url/baseUrl'

const Sound = ({question}) =>{
  const url = getAudioUrl(question.id);
  let audio = new Audio(url)

  const start = () => {
    audio.play()
  }

  return(
    <div className="question-container" onClick={start}>
      <h1>{question.hiri}</h1> 
      <span className="pulse"></span>   
    </div>
  )
}

export default Sound