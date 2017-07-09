import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div>
        hi
      </div>
    <Router>
      <div className="App">
        <Route path='/' Component={NavBar}  />

      </div>
    </Router>
    </div>
    );
  }
}

export default App;
