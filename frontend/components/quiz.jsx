import React from 'react';
import QuizForm from './quiz_form';
import Problem from './problem';
import merge from 'lodash/merge';

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      saved: true,
    };
    window.state = this.state;
    this.addProblem.bind(this);
  }
  
  quizProblems() {
    debugger;
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
      problems
    });
    // debugger;
  }

  editProblem(i, question, answer) {
    let problems = merge([], this.state.problems);
    problems[i].question = question;
    problems[i].answer = answer;
    this.setState({problems});
  }

  removeProblem(i, question, answer) {
    
  }  

  render() {
    return(
      <div className="quiz">
        <h2>Your Quiz!</h2>
        <div className="problems">
          {this.quizProblems()}
        </div>
        <QuizForm addProblem={this.addProblem.bind(this)} />
      </div>
    )
  }
}

export default Quiz;