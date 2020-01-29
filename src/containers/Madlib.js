import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    wordsArray: []
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    for(let i = 0; i < event.target.length; i++) {
      this.state.wordsArray.push(event.target[i].value);
    }
    this.setState(state => ({ ...state, wordsArray: state.wordsArray }));
    this.toggleResult();
  }

  render() {
    const { showResult, wordsArray } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} />}
        {showResult && <Result words={wordsArray} closeResult={this.toggleResult} />}
      </>
    );
  }
}
