import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

class HelloMessage extends Component {
  render() {

    const { name } = this.props;
    return (
      <div>
        <Header />
        <div className = container>
          <h1>Hello {name}</h1>
        </div>
      </div>
    );
  }
}

let App = document.getElementById('app');

ReactDOM.render(< HelloMessage name="NoIdeaForThisName"/>, App);