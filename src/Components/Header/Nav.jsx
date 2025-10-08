import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li> 
          </ul>
        </DropDown>
      </li>
       <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>     
          <ul>
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
          </ul>
      </li>      
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
