import React from 'react';
import { NavLinks } from '../interface/interface';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const navLinks: NavLinks = { '/': 'Start', '/about': 'AboutPage', '/form': 'Form' };
  const location = useLocation();
  return (
    <>
      <header className="header">
        <nav className="page-navigation">
          <div className="page-navigation-links">
            <NavLink to="/" data-testid="home">
              Start Wines
            </NavLink>
            <NavLink to="/about">About Page</NavLink>
            <NavLink to="/form">Form Page</NavLink>
          </div>
          <h6 className="current-page">Page: {navLinks[location.pathname] ?? 'NotFound'}</h6>
        </nav>
      </header>
    </>
  );
}

export default Header;
