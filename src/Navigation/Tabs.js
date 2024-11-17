import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';
import About from '../Pages/About/About';
import './Tabs.scss';

function Tabs() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <div className='NavBar'>
        <div className='toggle-btn' onClick={handleMenuToggle}>Menu</div>
        {/* Tab Navigation */}
        <nav className={`navItems ${menuOpen ? 'active' : ''}`}>
          <NavLink className='navItem' to="/">Home</NavLink>
          <NavLink className='navItem' to="/projects">Projects</NavLink>
          <NavLink className='navItem' to="/about">About</NavLink>
          <div className='nav_bg'></div>
        </nav>
      </div>

      {/* Content based on route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Tabs;
