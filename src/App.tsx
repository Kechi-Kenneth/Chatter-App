import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

const App: React.FC = () => {
  const NavBarItems: string[] = [
    "My feed",
    "Discussions",
    "chatter Trend",
    "More",
    "Search",
    "Post",
    "Darkmood",
    "Notification",
    "Profile",
  ];
  

  return (
    <>
      <NavBar
        icon="/public/icons8-favorite-chat-message-100.png"
        title="Chatter"
        items={NavBarItems}
      />
    </>
  );
};

export default App;
