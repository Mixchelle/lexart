import React from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import CreateUserPage from './pages/CreateUser';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/create" component={CreateUserPage} />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Router>
  );
}

export default App;
