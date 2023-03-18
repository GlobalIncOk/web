import React from 'react';
import '../../styles/Navbar.sass'
import Proptypes from 'prop-types';
import { NavLink } from "react-router-dom";

const NavBar = ({categories}) => {
	return (
		<nav className={'navbar'}>{
			categories.map((category) => {
				return ( <NavLink key={category.id}  to={category.route} > {category.name} </NavLink> );
			})}
		</nav>
	)
}

NavBar.proptype = {
	menus: Proptypes.array.isRequired,
}

export default NavBar;
