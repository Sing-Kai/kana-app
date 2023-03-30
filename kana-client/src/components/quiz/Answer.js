import {useEffect, useState} from 'react';

const Answer = ({kana, next}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [next]);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className='button-container'>
      <button onClick={handleClick}>
        {showAnswer ? kana : 'Show Answer'}
      </button>
    </div>
  )
}

export default Answer