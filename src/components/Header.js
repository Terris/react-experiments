import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

export const Header = () => (
  <header className="header">
    <h1 className="logo">React Sandbox</h1>
    <p className="byline">by Terris James Kremer</p>
    <nav className="nav-primary">
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.ABOUT}>About</Link>
    </nav>
  </header>
)
