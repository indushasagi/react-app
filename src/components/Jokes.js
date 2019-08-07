import React, { Component } from "react";

const Joke = ({ joke }) => {
  const { setup, punchline } = joke;
  return (
    <p style={{ margin: 20 }}>
      {setup} <em>{punchline}</em>
    </p>
  );
};
class Jokes extends Component {
  state = { joke: {}, moreJokes: [] };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(json => this.setState({ joke: json }));
  }

  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => response.json())
      .then(json => this.setState({ moreJokes: json }));
  };

  render() {
    return (
      <div>
        <h3>Highlighted joke</h3>
        <Joke joke={this.state.joke} />
        <hr />
        <p>Want more jokes!!!</p>
        <button onClick={this.fetchJokes}>Click Me!</button>
        {this.state.moreJokes.map(jokes => {
          return <Joke key={jokes.id} joke={jokes} />;
        })}
      </div>
    );
  }
}

export default Jokes;
