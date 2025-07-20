import './Navbar.css';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const Navbar = ({ them, setThem }) => {
	const toggle = () => {
		them == 'light' ? setThem('dark') : setThem('light')
	}
  return (
    <div className={`navbar`}>
      <img src={them === 'light' ? logo_light : logo_dark} alt="" className="logo" />

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={them === 'light' ? search_icon_light : search_icon_dark} alt="" />
      </div>

      <img onClick={() => toggle()} src={them === 'light' ? toggle_light : toggle_dark} alt="" className="toggle-icon" />
    </div>
  );
};

export default Navbar;
