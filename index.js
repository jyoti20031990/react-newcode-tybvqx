import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from './Main';
import './style.css';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
    
    };
  }

  render() {
    return (
      <div>
        <Main />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
