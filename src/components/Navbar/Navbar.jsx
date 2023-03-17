import React from 'react';
import '../../styles/Navbar.sass'
import Proptypes from 'prop-types';
import { NavLink } from "react-router-dom";

const Navbar = ({categories}) => {
	return (
		<>
			<nav className={'navbar'}>{
				categories.map((category) => {
					return ( <NavLink key={category.id}  to={category.route} > {category.name} </NavLink> );
				})}
			</nav>
		</>
	)
}

Navbar.proptype = {
	menus: Proptypes.array.isRequired,
}

export default Navbar;
