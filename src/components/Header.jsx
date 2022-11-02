import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/latest">Latest films</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </nav>
  );
}

export default Header;
