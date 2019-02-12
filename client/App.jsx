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
    this.addPointA = this.addPointA.bind(this);
    this.addPointB = this.addPointB.bind(this);
    this.subtractPointA = this.subtractPointA.bind(this);
    this.subtractPointB = this.subtractPointB.bind(this);

  }

  addPointA() {
    this.setState({scoreA: this.state.scoreA + 1})
  }

  addPointB() {
    this.setState({scoreB: this.state.scoreB + 1})
  }

  subtractPointA() {
    if (this.state.scoreA > 0) {
      this.setState({scoreA: this.state.scoreA - 1})
    }
  }

  subtractPointB() {
    if (this.state.scoreB > 0) {
      this.setState({scoreB: this.state.scoreB - 1})
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
              <Score
                scoreA={this.state.scoreA}
                scoreB={this.state.scoreB}
                addPointA={this.addPointA}
                addPointB={this.addPointB}
                subtractPointA={this.subtractPointA}
                subtractPointB={this.subtractPointB}
              />
            </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));