import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./Navbar.module.css";


function Navbar() {



    return (
        <>
            <nav className={styles.nav}>
                <button className={styles["menu-button"]}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
                <ul className={styles["nav-list"]}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Service</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/about">Pages</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/contact"><Button lable={'Book a Table'} /></Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;