import Navigation from './navigation';

/**
 * @description Header component
 * Header
 *  - Name
 *  - Navigation
 * @returns Header with navigation
 */
export default function Header() {
    return (
        <header className="App-header">
            <h1>Kevin Smith</h1>
            <Navigation />
        </header>
    );
}