import React, {useState}from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/friends-list">Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />    
          <PrivateRoute path="/logout" component={Logout} /> 
          <PrivateRoute path="/friends-list" component={FriendsList}/> 
        </Switch>
      </div>
    </Router>
    
    // <div className="App">
    //   <Login/>

    // </div>
  );
}

export default App;
