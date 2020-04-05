// create your App component here
import React from 'react';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.jaon())
        .then(json => this.setState({people: json.people}))
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default App