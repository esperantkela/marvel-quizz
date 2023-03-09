import React, {useState,useEffect, Component} from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import { QuizMarvel } from '../QuizMarvel'



class Quiz extends Component{
  state = {
    'levelNames' : ['debutant','confirme','Expert'],
    'quizLevel' : 0,
    'maxQuestions' : 10,
    'storedQuestions' : [],
    'question' : null,
    'options' : [],
    'idQuestion' : 0
  }
  
  loadQuestions = (quizz) => {
    const fetchArrayQuiz =  QuizMarvel[0].quizz[quizz]
    if(fetchArrayQuiz.length >= this.state.maxQuestions){
      const newArray = fetchArrayQuiz.map(({answer, ...keepRest}) => keepRest)
      console.log(newArray)
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

  componentDidUpdate(prevProps, prevState) {
    if(this.state.storedQuestions !== prevState.storedQuestions){
      this.setState({
        'question': this.state.storedQuestions[this.state.idQuestion].question,
        'options': this.state.storedQuestions[this.state.idQuestion].options
      })
    }
  }
  render(){
    const displayOptions = this.state.options.map((option, index) => {
      return (
        <p key={index} className='answerOptions'>{option}</p>
      )
    })
    return (
      <div>
        <Levels/>
        <ProgressBar/>
        <h2>{this.state.question}</h2>
        {displayOptions}
        <button className='btnSubmit'>Suivant</button>
      </div>
    )
  }
}

export default Quiz