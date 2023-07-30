import './App.css';
import React, { useState } from 'react';
import Login from './features/login/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomePage from './homePage/HomePage';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (

  <Router>

    <div className="App">

    <Routes>

          <Route  path="/" element={<Login />} />
          <Route  path="blogs"  element={<HomePage />} />

    </Routes>
    </div>
  </Router>
  );
}

export default App;
