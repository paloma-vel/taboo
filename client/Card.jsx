import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <h3 className="goal-word">{this.props.word}</h3>
        <ul className="taboo-words">
          <li>{this.props.tabooWords[0]}</li>
          <li>{this.props.tabooWords[1]}</li>
          <li>{this.props.tabooWords[2]}</li>
          <li>{this.props.tabooWords[3]}</li>
          <li>{this.props.tabooWords[4]}</li>
        </ul>
      </div>
    )
  }
}

export default Card;