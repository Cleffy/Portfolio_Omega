import Project from "../components/project";
import CodeE from "../data/code-e.json";

export default function Portfolio() {
    return (
        <main className="content">
            <section className="portfolio">
                <h2 className="portfolio_title">Portfolio</h2>
                <Project {...CodeE} />
            </section>
        </main>
    )
}
