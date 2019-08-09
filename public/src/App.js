import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Tutorial from './components/tutorial'
import Request from './components/request'

class App extends Component {
  render() {
    return (
      <div className='root'>
        <Tutorial />
        <Request />
      </div>
    );
  }
}

export default App;
