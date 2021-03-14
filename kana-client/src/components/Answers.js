import React from 'react'

const Answers = ({answers}) =>{

  console.log(answers);

  return(
    <div>      
      <h1>answers here</h1>
      {answers.map((ans) => (
        <li key={ans.id}>{ans.char}</li>
      ))}
    </div>
  )
}

export default Answers;