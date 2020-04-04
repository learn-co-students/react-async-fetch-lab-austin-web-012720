import React, { Component } from "react";

class App extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then(result => this.setState({people: result.people}))
  }

  render() {
      return (
          <div>
              {this.state.people.map((person, idx) => <p key={idx}>{person.name}</p>)}
          </div>
      )
  }
}

export default App;
