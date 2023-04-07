
import './App.css';
import React from 'react';
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path='/' exact Component={HomePage} />
          <Route path='/About' exact Component={About} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
