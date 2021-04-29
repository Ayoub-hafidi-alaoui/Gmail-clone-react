import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="app__body">
          <SideBar/>
          <Switch>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
