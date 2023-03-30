import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Answer from './Answer';
import Option from './Option';
import Sound from "./Sound";
import Page from '../layout/Page'
import useFetch from '../../hooks/useFetch';
import {Button} from '../common/Button'
import {url} from '../../url/baseUrl';

const Questions = () => {

  const {loading, error, data} = useFetch(url);

  if(error){
    return <Page>Opppos error</Page>
  }

  if (loading){
    return (<Page>Loading Quizz</Page>)
  }
  return (<QuestionsContent questionData = {data}/>)
}

const QuestionsContent = ({questionData}) =>{

  const [questionId, setQuestionId] = useState(0);
  const [next, setNext] = useState(false);
  const [answer, setAnswer] = useState('');
  const { question, answers } = questionData[questionId];

  const answerClick =(id)=>{
    //check if answer is correct if so go to the next question
    if(id === question.id){
      const nextIndex = questionId +1 % questionData.length
      setQuestionId(nextIndex);
      setAnswer(questionData[nextIndex].question.hiri);
      setNext((curr)=>!curr)
    }
  }

  useEffect(()=>{
    setAnswer(question.hiri);
  }, [])

  if (question.length === questionId) {
    return (<div>Finished </div>)
  }

  return(
    <Page>
      <Sound id = {question.id}/>
      <div className="answers">
        {answers.map((ans) => 
        (<Option key = {ans.id} 
                 id = {ans.id} 
                 kana ={ans.hiri} 
                 questionId={question.id} 
                 answerClick ={answerClick}
          />))}
      </div>
      <Answer kana = {answer} next={next}/>
      <div className='mt-5'>
        <Link to='/'>
          <Button>Home</Button>
        </Link> 
      </div>
    </Page>
  )
}

export default Questions