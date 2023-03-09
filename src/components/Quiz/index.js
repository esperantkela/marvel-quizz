import React, {useState,useEffect, Component} from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import { QuizMarvel } from '../QuizMarvel'



class Quiz extends Component{
  constructor(props){
    super()
    this.state = {
      'levelNames' : ['debutant','confirme','Expert'],
      'quizLevel' : 0,
      'maxQuestions' : 10,
      'storedQuestions' : [],
      'question' : null,
      'options' : [],
      'idQuestion' : 0
    }
  }

  loadQuestions = (quizz) => {
    const fetchArrayQuiz =  QuizMarvel[0].quizz[quizz]
    if(fetchArrayQuiz >= this.maxQuestions){
      const newArray = fetchArrayQuiz.map(({answer, keepRest}) => keepRest)

      this.setState({
        storedQuestions: newArray
      })
    }else{
      console.log('pas assez de questions !!')
    }
  }

  componentDidMount(){
    this.loadQuestions(this.state.levelNames[this.state.quizLevel])
  }

  componentDidUpdate(prevState, prevProps) {
    if(this.state.storedQuestions !== prevState.storedQuestions){
      this.setState({
        'question' : this.state.storedQuestions[0].question,
        'options' : this.state.storedQuestions[0].options
      })
    }
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