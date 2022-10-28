import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
  return (
    <header className="header1">
      <h2>Devmountain Eatery</h2>
      <nav>
        <NavLink to='/'>
          <button className="header-button">Home</button>
        </NavLink>
        <NavLink to='/new-recipe'>
          <button className="header-button">Add Recipe</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
