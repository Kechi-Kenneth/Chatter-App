// src/components/NavItem.tsx
import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { NavItemProps } from '../Types/NavBarTypes';
import ToolTip from './ToolTip';





const NavItem: React.FC<NavItemProps> = ({ item, type, icon, className }) => {
  if (type === 'icon' && icon) {
    return (
      <li  className={`nav-item ${className}`}>
          <ToolTip text={item}>
        <img src={icon} alt={item} />
        </ToolTip>
      </li>
    );
  }

  if (type === 'search') {
    return (
      <li  className={`nav-item ${className}`}>
        <SearchBar />
      </li>
    );
  }

  return (
    <li  className={`nav-item ${className}`}>
      {item}
    </li>
  );
};

export default NavItem;
