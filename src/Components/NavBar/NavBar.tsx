// src/components/NavBar.tsx
import React from 'react';
import NavItem from './NavItem';
import { NavBarProps } from '../Types/NavBarTypes';

const NavBar: React.FC<NavBarProps> = ({ title, icon, items }) => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <img src={icon} alt="icon" className="navbar-icon" />
        <h1 className="navbar-title">{title}</h1>
      </div>
      <ul className="navbar-items">
        {items.map((navItem, index) => (
          <NavItem key={index} {...navItem} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
