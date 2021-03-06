import React from 'react';
import $ from 'jquery';
// import Container from './/_container';

class Problem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({editing: true}, this.populateInputs.bind(this));     
  }

  populateInputs() {
    $('#question-edit-input').val(this.props.problem.question);
    $('#answer-edit-input').val(this.props.problem.answer);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.remove(this.props.idx);    
  }

  update(e) {
    e.preventDefault();
    let ques = $('#question-edit-input').val();
    let answ = $('#answer-edit-input').val();     

    this.setState({editing: false});

    this.props.edit(this.props.idx, ques, answ);
  }

  renderProblem() {
    if (this.state.editing) {
      return (
        <div key={this.props.idx}>
          <div className="set">
            <input id="question-edit-input" className="question" />
            <input id="answer-edit-input" className="answer" placeholder={this.props.problem.answer} />
          </div>
          <div className="interface">
            <button onClick={this.update.bind(this)}>Update</button>
            <button disabled>Delete</button>
          </div>
        </div>
      )
    } else {
      return (
        <div key={this.props.idx}>
          <div className="set">
            <p id="question" className="question">
              <span>Question: </span>{this.props.problem.question}
            </p>
            <p id="answer" className="answer">
              <span>Answer: </span>{this.props.problem.answer}
            </p>
          </div>
          <div className="interface">
            <button onClick={this.handleEdit.bind(this)}>Edit</button>
            <button onClick={this.handleDelete.bind(this)}>Delete</button>
          </div>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="problem">
        {this.renderProblem()}
      </div>
    )
  }
}

export default Problem;