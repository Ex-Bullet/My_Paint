import React, { Component, Fragment } from 'react';
import './App.css';
import Canvas from './canvas';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="main">
          <div className="color-guide">
            <div className="user user">Utilisateur</div>
          </div>
          <Canvas />
        </div>
      </Fragment>
    );
  }
}

export default App;
