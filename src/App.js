/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      peopleInSpace: []
    };
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          peopleInSpace: data.people,
        });
      });
  }

  render() {
    return <div>These people are in space: {this.state.peopleInSpace.map(person => person.name)}</div>
  }

}

export default App;