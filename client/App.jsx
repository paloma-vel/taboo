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
      showModal: false
    }
    this.addPointA = this.addPointA.bind(this);
    this.addPointB = this.addPointB.bind(this);
    this.subtractPointA = this.subtractPointA.bind(this);
    this.subtractPointB = this.subtractPointB.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getNewCard = this.getNewCard.bind(this);
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
              contentLabel="Minimal Modal Example"
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
                    <li>You can't say any part of the words listed (for example, if the word is "treehouse", you can't say "tree").</li>
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