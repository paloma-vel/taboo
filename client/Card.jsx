import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <h3 className="goal-word">Goal Word</h3>
        <ul className="taboo-words">
          <li>Taboo Word</li>
          <li>Taboo Word</li>
          <li>Taboo Word</li>
          <li>Taboo Word</li>
          <li>Taboo Word</li>
        </ul>
      </div>
    )
  }
}

export default Card;