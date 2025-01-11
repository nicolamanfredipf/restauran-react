import { Link } from "react-router-dom";
import Title from "../commons/title/Title";
import "./Footer.module.css";
import FooterSection from "./FooterSection";

function Footer() {
    return (
        <footer>
            <FooterSection name={'Company'}>
                <li>
                    <Link to={''}>About us</Link>
                </li>
                <li>
                    <Link to={''}>Contact Us</Link>
                </li>
                <li>
                    <Link to={''}>Reservavtion</Link>
                </li>
                <li>
                    <Link to={''}>Privacy Policy</Link>
                </li>
                <li>
                    <Link to={''}>Terms & Condition</Link>
                </li>
            </FooterSection>

            <FooterSection name={'Contact'}>
                <li>
                    <p>123 Street, New York, USA</p>
                </li>
                <li>
                    <p>+012 345 67890</p>
                </li>
                <li>
                    <p>info@example.com</p>
                </li>
                <ul>
                    <li>
                        <Link to={''}>twitter</Link>
                    </li>
                    <li>
                        <Link to={''}>Facebook</Link>
                    </li>
                    <li>
                        <Link to={''}>youtube</Link>
                    </li>
                    <li>
                        <Link to={''}>linkedin</Link>
                    </li>
                </ul>
            </FooterSection>

            <FooterSection name={'Opening'}>
                <li>
                    <h2>Monday -Saturday</h2>
                    <p>09AM - 09PM</p>
                </li>
                <li>
                    <h2>Sunday</h2>
                    <p>10AM - 08PM</p>
                </li>
            </FooterSection>

            <FooterSection name={'Newsletter'}>
                <p>
                    Dolor amet sit justo amet elitr clita ipsum elitr est.
                </p>
                <li>
                    <input type="text" placeholder="Your email"/>
                </li>
            </FooterSection>
        </footer>
    );
}

export default Footer;