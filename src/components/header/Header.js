import { useState } from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

function Header() {
  // Stato per gestire la visibilità della navbar
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  // Funzione per togglare la visibilità
  const toggleNavbar = () => {
    setIsNavbarVisible((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <button className={styles["menu-button"]} onClick={toggleNavbar}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </button>
      {/* Passa lo stato di visibilità come prop */}
      <Navbar isVisible={isNavbarVisible} />
    </header>
  );
}

export default Header;
