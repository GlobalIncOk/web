import '../../styles/Header.sass';
import { NavBar, Contact } from '../../components/index';
import BrandLogo from '../../assets/Icons/BrandLogo/BrandLogo';


const Header = ({categories}) => {
  return (
    <div className={"header"}>
      <BrandLogo />
			<NavBar categories={categories}/>
			<Contact />
		</div>
  );
};

export default Header;
