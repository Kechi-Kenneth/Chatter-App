import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <>
      <section>
        <nav className="nav-wrapper">
          <div className="nav-content">
        
            <img
              className="nav-logo"
              src="/public/icons8-favorite-chat-message-100.png"
              alt=""
            ></img>
            <p className="app-name" style={{marginLeft:-120}}>Chatter</p>
          
           
            <ul>
              <li>
                <a className="menu-item">My feed</a>
              </li>
              <li>
                <a className="menu-item">Discussions</a>
              </li>
              <li>
                <a className="menu-item chatters-trend fade-in-out">Chatters Trend</a>
              </li>
              <li>
                <a className="menu-item">More</a>
              </li>

              <li>
                <a className="menu-item">
                  <img className="search-icon" src="/public/icons8-search-52.png" />
                </a>
              </li>

              <li>
                <a className="menu-item">
                  <img src="" />
                  Write..
                </a>
              </li>
              <li>
                <a className="menu-item">
                  Darkmode
                  <img src="" />
                </a>
              </li>
              <li>
                <a className="menu-item">
                  Notification
                  <img src="" />
                </a>
              </li>
              <li>
                <a className="menu-item">
                  Profile
                  <img src="" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
