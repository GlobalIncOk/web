import React from 'react';
import '../../styles/NavBar.sass';
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const NavBar = ({categories}) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleOnClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {isMobileMenuOpen ? (
        <nav className={"mobile-menu"}>
          {categories.map((category) => {
            return (
              <NavLink className={"list"} key={category.id} to={category.route}>{category.name}</NavLink>
            );
          })}
        </nav>
      ) : (
        ""
      )}

      {isMobileMenuOpen ? (
        <HiX className={"mobile-menu-button"} onClick={handleOnClick} />
      ) : (
        <HiMenu className={"mobile-menu-button"} onClick={handleOnClick} />
      )}

      <nav className={"desktop-menu"}>
        {categories.slice(0, -1).map((category) => {
          return (
            <NavLink className={"list"} key={category.id} to={category.route}>{category.name}</NavLink>
          );
        })}
      </nav>
    </>
  );
}

NavBar.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default NavBar;
