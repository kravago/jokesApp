import React from "react";
import "./Joke.css";

class Joke extends React.Component {
  constructor({ vote, votes, text, id }) {
    super({ vote, votes, text, id });
    this.vote = vote;
    this.votes = votes;
    this.text = text;
    this.id = id;
  }

  upVote() {
    return this.vote(this.id, +1);
  }

  downVote() {
    return this.vote(this.id, -1);
  }

  render() {
    return <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={this.upVote}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={this.downVote}>
          <i className="fas fa-thumbs-down" />
        </button>

        {this.votes}
      </div>

      <div className="Joke-text">{this.text}</div>
    </div>
  }
}

export default Joke;
