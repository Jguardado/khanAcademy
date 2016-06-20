import React, { Component } from 'react';
import Codemirror from 'react-codemirror';

export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '// Code',
    };
  }

  updateCode(newCode) {
    this.setState({ code: newCode });
  }

  render() {
    const options = { lineNumbers: true, };

    return (
      <div>
        <h2>Text Editor</h2>
        <Codemirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options}/>
      </div>
    );
  }
}
