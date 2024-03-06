import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CreateUserPage from './pages/CreateUser';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreateUserPage />} />
      <Route path="/" element=(<Login)} />
    </Router>
  );
}

export default App;

