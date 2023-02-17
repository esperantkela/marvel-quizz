import React, {useState,useEffect} from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import { QuizMarvel } from '../QuizMarvel'

const Quiz = ({ userData }) => {
  
  const [levelNames, setLevelNames] = useState(['debutant', 'confirme', 'expert']);
  const [quizLevel, setQuizLevel] = useState(0);
  const [maxQuestions, setMaxQuestions] = useState(10);
  const [storedQuestions, setStoredQuestions] = useState([]);

  const loadQuestions = (quiz) => {
    const fetchArrayQuiz = QuizMarvel[0].quizz[quiz]
      if(fetchArrayQuiz.length >= maxQuestions) {
          const newArray = fetchArrayQuiz.map(({answer, ...keepRest}) => keepRest)
          setStoredQuestions(newArray)
          console.log(storedQuestions)
      }else{
        console.log('pas assez de questions')
      }
  }

  useEffect(() => {
    loadQuestions(levelNames[quizLevel])
  }, []);
  
  return (
    <div>
      <Levels/>
      <ProgressBar/>
      <h2>Notre question quiz</h2>
      <p className='answerOptions'>Question 1</p>
      <p className='answerOptions'>Question 2</p>
      <p className='answerOptions'>Question 3</p>
      <p className='answerOptions'>Question 4</p>
      <button className='btnSubmit'>Suivant</button>
    </div>
  )
}

export default Quiz