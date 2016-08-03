import React, { Component } from 'react';
import Codemirror from 'react-codemirror';
import  cm  from 'codemirror';

export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: 'defaults.javascript,',
    };
  }

  print(e) {
    console.log('being called');
    console.log('target val', e.target.value);
  }

  render() {
    return (
      <div>
      <h2>Text Editor</h2>
      <form id="code-editor">
        <textarea id="code-editor" onChange={this.print.bind(this)}></textarea>
        <input type='submit' ></input>
      </form>
      </div>
    );
  }
}
