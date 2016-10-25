import React from 'react';
import $ from 'jquery';
// import Container from './/_container';

class QuizForm extends React.Component {

  constructor(props) {
    super(props);
  }

  submitForm(e) {
    e.preventDefault();
    let ques = $('#question-input').val();
    let answ = $('#answer-input').val();

    $('#question-input').val('');
    $('#answer-input').val('');

    this.props.addProblem(ques, answ);    
  }

  render() {
    return(
      <form className="quiz-form">
        <input
          id="question-input"
          className="question-input"
          type="text"
          placeholder="question" />
        <textarea
          id="answer-input"
          className="answer-input"
          type="text"
          placeholder="answer"></textarea>
        <input type="submit" onClick={this.submitForm.bind(this)} />
      </form>
    )
  }
}

export default QuizForm;