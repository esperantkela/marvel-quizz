import React, {useState,useEffect, Component} from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import { QuizMarvel } from '../QuizMarvel'



class Quiz extends Component{
  render(){
    return (
      <div>
        <Levels/>
        <ProgressBar/>
        <h2>Notre question Quiz</h2>
        <p className='answerOptions'>Question 1</p>
      </div>
    )
  }
}

export default Quiz