const qBank = []

const hirigana = [

  {
    id: 1,
    char: 'A'
  },

  {
    id: 2,
    char: 'B'
  },

  {
    id: 3,
    char: 'C'
  },

  {
    id: 4,
    char: 'D'
  },

  {
    id: 5,
    char: 'E'
  },

  {
    id: 6,
    char: 'F'
  },
  {
    id: 7,
    char: 'G'
  },
  {
    id: 8,
    char: 'H'
  }
]

const test = [
  {
    questionId: 0,

    question: [{
      id: 1,
      char: 'A'
    }],

    answers: [  {
      id: 6,
      char: 'F'
    },
    {
      id: 1,
      char: 'A'
    },
    {
      id: 8,
      char: 'H'
    }]

  }
]

class QuestionObj{

  constructor(questionId, question, answers){
    this.questionId = questionId;  
    this.question = question;
    this.answers = answers 
  }
}

function createQBank(){

  const numberOfQuestions = 3;
  const numberOfAns = 3

  for(var i=0; i< numberOfQuestions; i++){

    var answers = getAnswers(numberOfAns);
    var question = answers[Math.floor(Math.random() * answers.length)];
    var q = new QuestionObj(i, question, answers)
    qBank.push(q);
  }

  
}

function getAnswers(numberOfAns){

  const answers = [];
  const clonedArray = JSON.parse(JSON.stringify(hirigana))
  let res = shuffle(clonedArray);

  for(var i=0; i< numberOfAns; i++){
    const randAns = res[Math.floor(Math.random() * res.length)];
    res = res.filter(item => item.id !== randAns.id);
    answers.push(randAns);
  }

  return answers;
}

const getQuiz = () =>{
  const data = createQBank();
  return data;

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default getQuiz;

// export default (n = 5) => Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));