// src/components/NavItem.tsx
import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { NavItemProps } from '../Types/NavBarTypes';

const NavItem: React.FC<NavItemProps> = ({ item, type, icon }) => {
  if (type === 'icon' && icon) {
    return (
      <li className="nav-item">
        <img src={icon} alt={item} />
      </li>
    );
  }

  if (type === 'search') {
    return (
      <li className="nav-item">
        <SearchBar />
      </li>
    );
  }

  return (
    <li className="nav-item">
      {item}
    </li>
  );
};

export default NavItem;
