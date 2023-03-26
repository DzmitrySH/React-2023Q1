import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface IHeaderProps {
  namePage: string;
}

export class Header extends Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  render() {
    const { namePage } = this.props;

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
}

export default Header;
