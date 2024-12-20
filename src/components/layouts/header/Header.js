import Navbar from "../navbar/Navbar";
import style from "./Header.module.css";
import Logo from "../logo/Logo";

function Header() {
  return (
    <header className={style.header}>
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
