import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface IHeaderProps {
  namePage: string;
}

function Header({ namePage }: IHeaderProps) {
  return (
    <>
      <header className="header">
        <nav className="page-navigation">
          <div className="page-navigation-links">
            <NavLink to="/">Start Wines</NavLink>
            <NavLink to="/about">About Page</NavLink>
            <NavLink to="/form">Form Page</NavLink>
          </div>
          <h6 className="current-page">{namePage}</h6>
        </nav>
      </header>
    </>
  );
}

export default Header;
