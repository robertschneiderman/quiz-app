import React from 'react';

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      saved: true,
    };
  }
  
  quizProblems() {
    return this.state.problems.map(problem => {
      return (<div className="problems">
        <p className="question">
          {problem.question}
        </p>
        <p className="answer">
          {problem.answer}
        </p>        
      </div>)    
    })

  }

  render() {
    return(
      <div className="quiz">
        <h2>Your Quiz!</h2>
        {this.quizProblems}
      </div>
    )
        // <QuizForm />
  }
}

export default Quiz;