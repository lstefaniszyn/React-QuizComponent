import React, { useState, Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  showNextQuestion() {
    // this.setState((state) => {
    //     let newState = { quiz_position: state.quiz_position + 1 };
    //     console.log(`New Set quiz_position:  ${newState.quiz_position}`);
    //     return newState;
    // });
    this.setState({ quiz_position: this.state.quiz_position + 1 });
  }

  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;
    return (
      <div>
        {isQuizEnd ? (
          <QuizEnd />
        ) : (
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default Quiz;
