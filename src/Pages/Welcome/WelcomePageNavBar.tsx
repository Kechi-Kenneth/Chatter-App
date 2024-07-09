import React from "react";
// import ToolTip from 'Components/NavBar/ToolTip'
import "./WelcomePageNavBar.css";
import NavItem from "../../Components/NavBar/NavItem";
import { NavBarProps } from "../../Components/Types/NavBarTypes";
import { Link } from "react-router-dom";

const WelcomePageNavBar: React.FC<NavBarProps> = ({ title, icon, items }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="navbar-header">
          <img src={icon} alt="icon" className="navbar-icon" />
          <h1 className="navbar-title">{title}</h1>
        </div>
        <ul className="navbar-items">
          {items.map((navItem, index) => (
            <NavItem key={index} {...navItem} />
          ))}
        </ul>    
      <Link to="/signup">
        <button className="get-started">Our Story</button>
        </Link>
      </div>
    </nav>
  );
};

export default WelcomePageNavBar;
