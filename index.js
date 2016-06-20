import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './src/components/app.js';

class Main extends Component {
  render() {
    return (
      <App/>
    );
  }
}

render(<Main/>, document.getElementById('app'));
