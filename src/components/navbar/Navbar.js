import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar({ isVisible }) {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible((prevState) => !prevState);
  };

  return (
    <nav
      className={`${styles["nav"]} ${
        isVisible ? styles["visible"] : styles["hidden"]
      }`}
    >
      <ul className={styles["nav-list"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li className={styles["sublist-container"]}>
          {/* Bottone per il toggle del submenu */}
          <button
            onClick={toggleSubMenu}
            className={`${styles["pages-button"]}`}
          >
            Pages
          </button>
          <ul
            className={`${styles["sub-list"]} ${
              isSubMenuVisible ? styles["visible"] : styles["hidden"]
            }`}
          >
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/our-team">Our Team</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/booking">
            <Button label={"Book a Table"} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
