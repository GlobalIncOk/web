import React from 'react';
import '../../styles/Header.sass';
import { Navbar } from '../../components/Navbar';
import Brandlogo from '../../assets/Icons/Brandlogo/Brandlogo';
import { GoToBudget } from '../../components/Buttons/GoToBudget';

const Header = ({categories}) => {
	return (
		<div className={'header'}>
			<Brandlogo />
			<Navbar categories={categories} />
			<GoToBudget />
		</div>
	)
};

export default Header;
