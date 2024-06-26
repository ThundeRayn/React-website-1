import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact component={Home}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
