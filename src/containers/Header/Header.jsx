import { useState } from "react";
import '../../styles/Header.sass';
import { NavBar, GoToBudget } from '../../components/index';
import { Brandlogo } from '../../assets/index';
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({categories}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MENU = [
		{ title: "Home", link: "#" },
    { title: "Portfolio", link: "#" },
    { title: "About Me", link: "#" },
    { title: "Contact", link: "#" }
  ];

  const handleOnClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={"header"}>
      <Brandlogo />
      <ul className={"desktop-menu"}> {MENU.map((menuItem) => { return ( <li><a href={menuItem.link}>{menuItem.title}</a></li> ); })}</ul>
			{isMobileMenuOpen ? ( <HiX className={"mobile-menu-button"} onClick={handleOnClick} /> ) :
													( <HiMenu className={"mobile-menu-button"} onClick={handleOnClick} /> )}
      {isMobileMenuOpen ? ( <ul className={"mobile-menu"}> {MENU.map((menuItem) => { return ( <li><a href={menuItem.link}>{menuItem.title}</a></li> ); })} </ul> ) :
												  ( "" )}
		</div>
  );
};

export default Header;

// 			<NavBar className={"desktop-menu"} categories={categories} />
// 			{isMobileMenuOpen ? ( <HiMenu className={"mobile-menu-button"} onClick={handleOnClick} /> ) :
// 													( <HiX className={"mobile-menu-button"} onClick={handleOnClick} /> )}
//       {isMobileMenuOpen ? ( <NavBar className={"mobile-menu"} /> ) : ( "" )}
