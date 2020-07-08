import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.quiz_question = props.quiz_question;
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.quiz_question.answer_options.map((answer) => (
              <QuizQuestionButton
                button_text={answer}
              />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
