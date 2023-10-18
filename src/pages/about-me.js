import ProfileData from "../data/profile.json";

/**
 * @description AboutMe page for portfolio
 * Creates a header, image, and description from the profile.json data
 * @returns 
 */
export default function AboutMe() {
    return (
        <main className="content">
            <section className="about-me">
                <h2 className="about-me_title">About Me</h2>
                <img className="about-me_image" src={ProfileData.image} alt={ProfileData.name} />
                <p className="about-me_description">{ProfileData.bio}</p>
            </section>
        </main>
    );
}