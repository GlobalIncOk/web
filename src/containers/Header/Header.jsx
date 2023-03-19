import '../../styles/Header.sass';
import { NavBar, Contact } from '../../components/index';
import { Brandlogo } from '../../assets/index';

const Header = ({categories}) => {
  return (
    <div className={"header"}>
      <Brandlogo />
			<NavBar categories={categories}/>
			<Contact />
		</div>
  );
};

export default Header;
