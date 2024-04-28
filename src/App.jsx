import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Signup from './assets/components/Signup';
import Login from './assets/components/Login';
import HomePage from './assets/components/HomePage';
import Aboutus from './assets/components/Aboutus';
import Welcome from './assets/components/Welcome';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Aboutus />} /> 
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<Welcome />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
