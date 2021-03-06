import React from 'react';
import QuizForm from './quiz_form';
import Problem from './problem';
import merge from 'lodash/merge';
import $ from 'jquery';

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      saveStatus: '',
    };
    // window.state = this.state;
    // this.addProblem.bind(this);

    if (localStorage.getItem('problems')) {
      this.state.problems = JSON.parse(localStorage.getItem('problems'));
    }    
  }

  // componentWillMount() {

  // }

  
  quizProblems() {
    return this.state.problems.map((problem, i) => {
      return (
        <Problem
          problem={problem}
          edit={this.editProblem.bind(this)}
          remove={this.removeProblem.bind(this)}
          idx={i} />
      );
    });
  }

  addProblem(question, answer) {
    let problem = {};
    problem['question'] = question;
    problem['answer'] = answer;
    let problems = this.state.problems.concat([problem]);
    this.setState({
      problems,
      saveStatus: 'not saved'
    });
    // debugger;
  }

  editProblem(i, question, answer) {
    let problems = merge([], this.state.problems);
    problems[i].question = question;
    problems[i].answer = answer;
    this.setState({
      problems,
      saveStatus: 'not saved'
    });
  }

  removeProblem(i) {
    let problems = merge([], this.state.problems);
    problems.splice(i, 1);
    this.setState({
      problems,
      saveStatus: 'not saved'
    });    
  }

  save(e) {
    e.preventDefault();
    $('.save-btn').prop('disabled', true);
    setTimeout(() => {
      if (Math.random() < 0.3) {
        this.errorModal();
        $('.save-btn').prop('disabled', false);
      } else {
        localStorage.setItem('problems', JSON.stringify(this.state.problems));
        this.setState({
          saveStatus: 'saved!'      
        });
      }
    }, Math.random() * 1000)
  }

  saveBtn() {
    if (this.state.saveStatus === 'not saved') {
      return(
        <button className="save-btn" onClick={this.save.bind(this)}>Save</button>   
      ) 
    } else {
      return(
        <button className="save-btn" disabled onClick={this.save.bind(this)}>Save</button>   
      )       
    }
  }

  errorModal() {
    let modal = $('#modal')
    modal.addClass('active');

    setTimeout(() => {
      modal.removeClass('active');
    }, 1500);
  }

  render() {
    return(
      <div className="quiz">
        <div id="modal" className="modal">
          <p>Sorry, but the changes failed to save!</p>
        </div>
        {this.saveBtn()}
        <p className="save-status">{this.state.saveStatus}</p>
        <h2 className="title">Your Quiz!</h2>
        <div className="problems">
          {this.quizProblems()}
        </div>
        <QuizForm addProblem={this.addProblem.bind(this)} />
      </div>
    )
  }
}

export default Quiz;