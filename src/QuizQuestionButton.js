import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li>
        <button button_text={this.props.button_text} />
      </li>
    );
  }
}

export default QuizQuestionButton