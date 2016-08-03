import React, { Component } from 'react';

import MainView from './mainView.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Connecting files</h1>
        <MainView />
      </div>
    );
  }
}
