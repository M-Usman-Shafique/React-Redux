import { Link } from 'react-router-dom';
import facebookIcon from '../img/fb.png';
import twitterIcon from '../img/twitter.png';
import instagramIcon from '../img/insta.png';
import linkedinIcon from '../img/linkedin.png';
import '../components/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h4>About Us</h4>
                    <p>A leading e-commerce platform providing a wide range of products.</p>
                </div>
                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <p>Email: support@ecommerce.com</p>
                    <p>Address: 123 E-commerce St.</p>
                </div>
                <div className="footer-column">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><Link to="#"><img src={facebookIcon} alt="Facebook" /></Link></li>
                        <li><Link to="#"><img src={twitterIcon} alt="Twitter" /></Link></li>
                        <li><Link to="#"><img src={instagramIcon} alt="Instagram" /></Link></li>
                        <li><Link to="#"><img src={linkedinIcon} alt="LinkedIn" /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 E-commerce. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
