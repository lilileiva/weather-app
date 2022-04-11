import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Nav from '../components/Nav.jsx';
// import Footer from '../components/Footer.jsx';
import About from '../components/About.jsx';
// import Cards from '../components/Cards.jsx';
import Card from '../components/Card.jsx';


function App() {
  return (
    <div className='app'>
      <Nav />
      <div className='appContent'>
        <Routes>
          {/* <Route path="/" element={<Cards />} /> */}
          <Route path="/" element={<Card />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
