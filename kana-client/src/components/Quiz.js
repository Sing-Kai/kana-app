import React, {useState, useEffect} from 'react'
import QuizData from '../assets/data.json'
import Answer from './Answer';
import Question from "./Question";
import {useQuery, QueryClient, QueryClientProvider}from 'react-query';
import axios from 'axios'

const queryClient = new QueryClient();

// const QuizContent = () => {
//   // const {inputText} = useSearch();
//   const inputText = "testing"
//   // if(inputText === "") return <div className = "search-term"></div>
//   return (
//     <QueryClientProvider client ={queryClient}>
//       <Quiz initialIsOpen={false}/> 
//     </QueryClientProvider>
//   );
// }

const QuizContent = () => {

  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios('http://localhost:8080/quiz');
      var quiz = response.data;
      setQuiz(quiz);
    }
    fetchData();
  }, []);

  if (quiz === undefined || quiz.length === 0){
    console.log('Loading Quiz')
    return (<div>Loading Quizz</div>)
  }
  return (<div><Quiz qdata = {quiz}/></div>)
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