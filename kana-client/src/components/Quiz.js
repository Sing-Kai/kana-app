import React, {useState, useEffect} from 'react'
import Answer from './Answer';
import Question from "./Question";
import Page from '../components/layout/Page'
import useFetch from '../hooks/useFetch';
import {url} from '../url/baseUrl';

const QuizContent = () => {

  const {loading, error, data} = useFetch(url);

  if(error){
    return <Page>Opppos error</Page>
  }

  if (loading){
    return (<Page>Loading Quizz</Page>)
  }
  return (<Page><Quiz qdata = {data}/></Page>)
}

const Quiz = ({qdata}) =>{

  const [questionId, setQuestionId] = useState(0);
  const data = qdata;
  const answerClick =(id)=>{

    if(id === data[questionId].question.id){
      const next = questionId +1 % data.length
      setQuestionId(next);
    }
  }

  if (data.length === questionId) {
    return (<div>Finished </div>)
  }

  return(

    <div >
      <Question question = {data[questionId].question}/>

      <div className="answers">
        {data[questionId].answers.map((ans) => 
        (<Answer key = {ans.id} 
                 id = {ans.id} 
                 kana ={ans.hiri} 
                 questionId={data[questionId].question.id} 
                 answerClick ={answerClick}/>))}
      </div>

    </div>
  )
}

export default QuizContent