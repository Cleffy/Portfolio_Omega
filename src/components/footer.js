import { Link } from "react-router-dom";

/**
 * @description Footer component
 * GitHub - link to GitHub profile
 * LinkedIn - link to LinkedIn profile
 * Youtube - link to Youtube channel
 * @returns Footer with links to GitHub, LinkedIn, and Youtube
 */
export default function footer() {
    return (
        <footer className="App-footer">
            <ul>
                <li>
                    <Link to="https://github.com/Cleffy/">GitHub</Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/kevin-smith-76123955/">LinkedIn</Link>
                </li>
                <li>
                    <Link to="https://www.youtube.com/channel/UCrVU-cgjD2oZB5Iv68_m3Iw">Youtube</Link>
                </li>
            </ul>
        </footer>
    );
}