import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

//import Home from './pages/home';
import AboutMe from './pages/about-me';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';

import Header from './components/header';
import Footer from './components/footer';

/**
 * @description App component
 * Header
 * MainRoute
 *  - Home
 *  - AboutMe
 *  - Portfolio
 *  - Contact
 *  - Resume
 * Footer
 * @returns App with routes to each page
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Route exact path = '/' component={Home} /> */}
          <Route exact path = '/' component={AboutMe} />
          <Route exact path = '/portfolio' component={Portfolio} />
          <Route exact path = '/contact' component={Contact} />
          <Route exact path = '/resume' component={Resume} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
