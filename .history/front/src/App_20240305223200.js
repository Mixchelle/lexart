import React from 'react';
import { Route, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import CreateUserPage from './pages/CreateUser';
import './App.css';

function App() {
  let navigate = useNavigate();
  return (
    <Router>
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreateUserPage />} />
      <Route path="/" element={navigate('/login')} />
    </Router>
  );
}

export default App;

