import { Link } from "react-router-dom";

/**
 * Home - return to homepage
 * About Me - go to about me page
 * Portfolio - go to portfolio page
 * Contact - go to contact page
 * Resume -go to resume page
 * @returns Navigation bar
 */
export default function Navigation() {
    return (
        <nav className="navigator">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </nav>
    );
}