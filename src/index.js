import React, { Component } from "react";
import Title from "./components/Title";
import "./styles.css";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <h3>Hello!</h3>
        <p>My name is Indu</p>
        {this.state.displayBio ? <Title /> : null}

        <button onClick={this.toggleDisplayBio}>Click</button>
      </div>
    );
  }
}

export default App;
