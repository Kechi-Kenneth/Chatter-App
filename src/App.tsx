// src/App.tsx
import React from 'react';
import NavBar from './Components/NavBar/NavBar';

const App: React.FC = () => {
  const items = [
    { type: 'text', item: 'Home' },
    { type: 'text', item: 'About' },
    { type: 'text', item: 'Services' },
    { type: 'search', item: 'Blog' },
    { type: 'icon', item: 'Contact', icon: '/path/to/contact-icon.png' },
    { type: 'icon', item: 'Login', icon: '/path/to/login-icon.png' }
  ];

  return (
    <div className="App">
      <NavBar
        title="My Website"
        icon="/path/to/icon.png"
        items={items}
      />
    </div>
  );
};

export default App;
