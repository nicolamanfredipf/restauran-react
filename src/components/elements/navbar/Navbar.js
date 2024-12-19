import { Link } from "react-router-dom";
import style from './Navbar.module.scss';

function Navbar() {
  return (
    <nav className={style.mainNav}>
      <ul className={style.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Service</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/">Pages</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">
            <button>Book a table</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
