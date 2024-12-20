import { Link } from "react-router-dom";
import Button from "../commons/button/Button";
import style from "./Navbar.module.css";

function Navbar(){
    return(
        <nav>
            <ul className={style.navbar}>
                <li>
                    <Link to="">Home</Link>
                </li>
                <li>
                    <Link to="">About</Link>
                </li>
                <li>
                    <Link to="">Service</Link>
                </li>
                <li>
                    <Link to="">Menu</Link>
                </li>
                <li>
                    <Link to="">Pages</Link>
                </li>
                <li>
                    <Link to="">Contact</Link>
                </li>
                <li>
                    <Link to="">
                    <Button lable="Book A Table" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
