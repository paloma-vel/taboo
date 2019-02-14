import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Card from './Card.jsx';
import Score from './Score.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      tabooWords: [],
      scoreA: 0,
      scoreB: 0,
      showModal: false,
      timerOn: false,
      min: 1,
      sec: 0
    }
    this.addPointA = this.addPointA.bind(this);
    this.addPointB = this.addPointB.bind(this);
    this.subtractPointA = this.subtractPointA.bind(this);
    this.subtractPointB = this.subtractPointB.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getNewCard = this.getNewCard.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
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

  handleOpenModal() {
    this.setState({showModal: true})
  }

  handleCloseModal() {
    this.setState({showModal: false})
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.state.min === 1 && this.state.sec === 0) {
        this.setState({
          timerOn: true,
          min: 0,
          sec: 59
        })
      } else if (this.state.min === 0 && this.state.sec > 0) {
        this.setState({
          min: 0,
          sec: this.state.sec - 1
        })
      } else if (this.state.min === 0 && this.state.sec === 0) {
        this.setState({
          timerOn: false
        })
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({
      timerOn: false
    })
  }

  resetTimer() {
    clearInterval(this.timer);
    this.setState({
      timerOn: false,
      min: 1,
      sec: 0
    })
  }

  getNewCard() {
    axios.get('/api/word')
    .then((response) => {
      this.setState({
        word: response.data[0].word,
        tabooWords: response.data[0].taboo
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getNewCard();
  }

  render() {
    return (
      <div id="container">
        <div className="intro">
            <h1>Taboo</h1>
            <i className="how-to-play far fa-question-circle" onClick={this.handleOpenModal}></i>
            <Modal 
              isOpen={this.state.showModal}
              className="modal"
            >
              <div class="modal-container">
                <i class="close-modal-btn fas fa-window-close" onClick={this.handleCloseModal}></i>
                <div class="modal-text">
                  <h3>How to Play</h3>
                  <p>The goal is to get your teammates to guess the word at the top of the card, without saying any of the forbidden (or "taboo") words listed below.</p>
                  <p>Try for as many correct guesses as possible within the time allotted by the timer. Each correct guess by your teammates wins your team a point!</p>
                  <h3>Rules</h3>
                  <ul>
                    <li>You're not allowed to say any part of the words listed (for example, if the word is "treehouse", you can't say "tree"). If you do, your team loses a point.</li>
                    <li>You can only use words to describe things - no gesturing, pantomiming, drawing, or making noises (like quacking).</li>
                  </ul>
                </div>
              </div>
            </Modal>
        </div>
        <div className="row">
            <div className="col">
              <Card word={this.state.word} tabooWords={this.state.tabooWords}/>
              <div className="change-card">
                  <i className="next-card far fa-arrow-alt-circle-right" onClick={this.getNewCard}></i>
              </div>
            </div>
            <div className="col">
              <div className="timer">
                  <span className="countdown">
                    {this.state.min}:{this.state.sec < 10 ? '0' + this.state.sec : this.state.sec}
                  </span>
                  <div className="timer-buttons">
                    <i className="fas fa-play" onClick={this.startTimer}></i>
                    <i className="fas fa-stop" onClick={this.stopTimer}></i>
                    <i className="fas fa-undo-alt" onClick={this.resetTimer}></i>
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