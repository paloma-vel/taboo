import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import Score from './Score.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      tabooWords: [],
      scoreA: 0,
      scoreB: 0
    }
  }

  render() {
    return (
      <div id="container">
        <div className="intro">
          <h1>Taboo</h1>
          <i className="how-to-play far fa-question-circle"></i>
        </div>
        <div className="row">
        <div className="col">
          <Card />
          <div className="change-card">
            <i className="next-card far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
        <div className="col">
        <div className="timer">
          <span className="countdown">1:00</span>
            <div className="timer-buttons">
              <i className="fas fa-play"></i>
              <i className="fas fa-stop"></i>
              <i className="fas fa-undo-alt"></i>
            </div>
        </div>
          <Score />
        </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));