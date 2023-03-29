import {useEffect, useState} from 'react';

const Answer = ({kana, next}) => {

  const [display, setDisplay] = useState(false);
  const [text, setText] = useState('Show Answer');

  const handleOnClick = (value) =>{
    if(value){
      setText(kana)
    }else{
      setText('Show Answer')
    }
    setDisplay((curr)=>!curr)
  }

  useEffect(()=>{
    setText('Show Answer')
  }, [next])

  return(
    <>
      <div className='button-container'>
        {
          <button onClick={()=>{handleOnClick(display)}}>{text}</button>
        }
      </div>
    </>
  )
}

export default Answer