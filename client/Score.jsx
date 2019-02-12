import React from 'react';

class Score extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="score">
        <div className="score-container">
          <span className="team">Team A</span>
          <span className="each-score">{this.props.scoreA}</span>
          <div className="score-buttons">
            <i className="subtract-point far fa-minus-square" onClick={this.props.subtractPointA}></i>
            <i className="add-point far fa-plus-square" onClick={this.props.addPointA}></i>
          </div>
        </div>
        <div className="score-container">
          <span className="team">Team B</span>
          <span className="each-score">{this.props.scoreB}</span>
          <div className="score-buttons">
            <i className="subtract-point far fa-minus-square" onClick={this.props.subtractPointB}></i>
            <i className="add-point far fa-plus-square" onClick={this.props.addPointB}></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Score;