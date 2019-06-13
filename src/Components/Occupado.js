import React from 'react';
const axios = require('axios');

class Occupado extends React.Component {
  state = {
    delay: 1000,
    doorStatus: '----',
  };

  componentDidMount() {
    this.interval = setInterval(this.checkDoor, this.state.delay);
  }
  componentDidUpdate() {
    clearInterval(this.interval);
    this.interval = setInterval(this.checkDoor, this.state.delay);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  checkDoor = () => {
    var self = this;
    axios.get('/door').then(function(response) {
      self.setState({ doorStatus: response.data ? 'Occupado!' : 'Open' });
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.doorStatus}</h1>
      </>
    );
  }
}

export default Occupado;
