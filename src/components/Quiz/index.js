import React, {useState,useEffect, Component} from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import { QuizMarvel } from '../QuizMarvel'



class Quiz extends Component{
  constructor(props){
    super()
    this.state = {
      'levelNames' : ['debutant','confirme','Expert'],
      'quizLevel' : 0
    }
  }

  loadQuestions = (quizz) => {
    const fetchArrayQuiz =  QuizMarvel[0].quizz[quizz]
  }

  componentDidMount(){
    this.loadQuestions(this.state.levelNames[this.state.quizLevel])
  }
  render(){
    
    return (
      <div>
        <Levels/>
        <ProgressBar/>
        <h2>Notre question Quiz</h2>
        <p className='answerOptions'>Question 1</p>
        <p className='answerOptions'>Question 2</p>
        <p className='answerOptions'>Question 3</p>
        <p className='answerOptions'>Question 4</p>
        <button className='btnSubmit'>Suivant</button>
      </div>
    )
  }
}

export default Quiz