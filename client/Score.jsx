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
          <span className="each-score">0</span>
          <div className="score-buttons">
            <i className="subtract-point far fa-minus-square"></i><i className="add-point far fa-plus-square"></i>
          </div>
        </div>
        <div className="score-container">
          <span className="team">Team B</span>
          <span className="each-score">0</span>
          <div className="score-buttons">
            <i className="subtract-point far fa-minus-square"></i><i className="add-point far fa-plus-square"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Score;