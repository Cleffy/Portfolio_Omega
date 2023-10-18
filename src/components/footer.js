import { Link } from "react-router-dom";

export default function footer() {
    return (
        <footer className="App-footer">
            <ul>
                <li><Link to="https://github.com/Cleffy/">GitHub</Link></li>
                <li><Link to="https://www.linkedin.com/in/kevin-smith-76123955/">LinkedIn</Link></li>
                <li><Link to="https://www.youtube.com/channel/UCrVU-cgjD2oZB5Iv68_m3Iw">Youtube</Link></li>
            </ul>
        </footer>
    );
}