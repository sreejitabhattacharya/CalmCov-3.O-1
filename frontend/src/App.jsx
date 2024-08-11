// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resources from './components/Resources'; // Import the new component
import Login from './components/Login';
import './components/styles/App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content"> {/* Wrapper for main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} /> {/* New route for Resources */}
          <Route path="/contact" element={<Contact />} />
          <Route path='/login' element={(<Login/>)} />
        
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;