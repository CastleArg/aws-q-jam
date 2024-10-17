import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = observer(() => {
  return (
    <div className="app">
      <nav className="nav">
        <ul className="navList">
          <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
          <li className="navItem"><Link to="/about" className="navLink">About</Link></li>
          <li className="navItem"><Link to="/contact" className="navLink">Contact</Link></li>
        </ul>
      </nav>

      <header className="appHeader">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </header>
    </div>
  );
});

export default App;
