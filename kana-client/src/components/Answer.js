import React, {useState, useEffect}from 'react'

const Answer = ({id, kana, questionId, answerClick}) =>{

  const white = "white"
  const correct = "rgb(167, 250, 205)"
  const incorrect = "rgb(250, 167, 167)"
  const hover = "rgb(242, 242, 242)"

  const [bgColour, setBgColour] = useState(white);


  useEffect(() => {
    setBgColour(white);
    return () => setBgColour(white);
  }, [])

  const onMouseDown =(id)=>{ 

    if (id === questionId){
      setBgColour(correct)
    }else{
      setBgColour(incorrect)      
    }
  }

  const onMouseUp = async()=>{
    await timeout(120)
    setBgColour(white)
  }

  const onMouseOver =()=>{
    setBgColour(hover)
  }

  const onMouseOut =() =>{
    setBgColour(white)
  }

  function timeout(number) {
    return new Promise( res => setTimeout(res, number) );
  }

  return(
      <div className ="answer" 
            key={id} 
            onClick = {()=>{answerClick(id)}} 
            style={{backgroundColor: bgColour}}
            onMouseDown={()=>{onMouseDown(id)}}
            onMouseUp={onMouseUp}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            >
        {kana}
      </div>
  )
}

export default Answer
