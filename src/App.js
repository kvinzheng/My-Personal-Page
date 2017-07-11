import React, { Component } from 'react'; // eslint-disable-next-line
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Narvbar from './components/navbar/navbar';
import Home from './components/home/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div>
          hi
        </div> */}
        <Router>
          <div className="App">
            <Route path='/' component={Narvbar} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
