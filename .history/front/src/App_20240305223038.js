import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import CreateUserPage from './pages/CreateUser';
import './App.css';

function App() {
  return (


          <Route path="/login" component={Login} />
          <Route path="/create" component={CreateUserPage} />
          <Route path="/">
            <Redirect to="/login" />
          </Route>


  );
}

export default App;
