import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.quiz_question = props.quiz_question;
  }

  handleClick(buttonText){
    console.log("QuizQuestion: " + buttonText) ;
    if(buttonText === this.quiz_question.answer){
      console.log("True") ;
      this.props.showNextQuestionHandler()
      }

  }

  render() {
    return (
      <main>
        <section>
          <p>{this.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer, index) => (
              <QuizQuestionButton
                button_text={answer}
                key={index}
                clickHandler={this.handleClick.bind(this)}
              />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
