import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Components/Home';

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
          </Routes>
           </div>
       </Router>
   );
  }
}

export default App;
