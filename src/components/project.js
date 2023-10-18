import { Link } from "react-router-dom";

/**
 * @description Project component for portfolio page
 * @param {object} props 
 *  @property {url string} props.title - title of project
 *  @property {url string} props.image - image of project
 *  @property {url string} props.alt - alt text for image
 *  @property {url string} props.description - description of project
 *  @property {url string} props.github - github repository link
 *  @property {url string} props.live - live link
 * @returns 
 */
export default function Project(props) {
    return (
        <section className="project">
            <h2 className="project_title">{props.title}</h2>
            <img className="project_image" src={props.image} alt={props.alt} />
            <p className="project_description">{props.description}</p>
            <ul className="project_links">
                <li className="project_link">
                    <Link to={props.github}>GitHub</Link>
                </li>
                <li className="project_link">
                    <Link to={props.live}>Live</Link>
                </li>
            </ul>
        </section>
    );
}