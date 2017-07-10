import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import navbarInstance from './components/navbar/navbar';
import Home from './components/home/home';
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
            {/* <Route path="/" component={App}>  */}
            <Route path='/' component={navbarInstance} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
