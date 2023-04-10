import React, { useState, useEffect, Component } from "react";
import Levels from "../Levels";
import ProgressBar from "../ProgressBar";
import { QuizMarvel } from "../QuizMarvel";

class Quiz extends Component {
  state = {
    levelNames: ["debutant", "confirme", "Expert"],
    quizLevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestion: 0,
    btnDisabled: true,
    userAnswer: null,
    score:0
  };

  storeDataRef = React.createRef()

  loadQuestions = (quizz) => {
    const fetchArrayQuiz = QuizMarvel[0].quizz[quizz];
    if (fetchArrayQuiz.length >= this.state.maxQuestions) {

      this.storeDataRef.current = fetchArrayQuiz;
      

      const newArray = fetchArrayQuiz.map(
        ({ answer, ...keepRest }) => keepRest
      );

      this.setState({
        storedQuestions: newArray,
      });
    } else {
      console.log("pas assez de questions !!");
    }
  };

  componentDidMount() {
    this.loadQuestions(this.state.levelNames[this.state.quizLevel]);
  }

  nextQuestion = () => {
    if(this.state.idQuestion === this.state.maxQuestions -1){
      //code
    }else{
      this.setState(prevState => ({
        idQuestion: prevState.idQuestion +1
      }))
    }
   const goodAnswer = this.storeDataRef.current[this.state.idQuestion].answer;

   if(this.state.userAnswer === goodAnswer) {
    this.setState(prevState => ({
      score: prevState.score + 1
    }))
   }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options,
      });
    }

    if(this.state.idQuestion !== prevProps.idQuestion){
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options,
        userAnswer : null,
        btnDisabled : true
      })
    }
  }

  submitAnswer = (selectedAnswer) => {
    this.setState({
      userAnswer: selectedAnswer,
      btnDisabled: false,
    });
  };
  render() {
    const displayOptions = this.state.options.map((option, index) => {
      return (
        <p
          key={index}
          className={`answerOptions ${
            this.state.userAnswer === option ? "selected" : ""
          }`}
          onClick={() => this.submitAnswer(option)}
        >
          {option}
        </p>
      );
    });
    return (
      <div>
        <Levels />
        <ProgressBar />
        <h2>{this.state.question}</h2>
        {displayOptions}
        <button disabled={this.state.btnDisabled} className="btnSubmit" onClick={this.nextQuestion}>
          Suivant
        </button>
      </div>
    );
  }
}

export default Quiz;
