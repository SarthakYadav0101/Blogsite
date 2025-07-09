import React from 'react';

const Navbar = ({ currentView, onViewChange }) => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="nav-links">
        <button 
          className={currentView === 'home' ? 'active' : ''}
          onClick={() => onViewChange('home')}
        >
          Home
        </button>
        <button 
          className={currentView === 'create' ? 'active' : ''}
          onClick={() => onViewChange('create')}
        >
          New Blog
        </button>
      </div>
    </nav>
  );
};

export default Navbar;