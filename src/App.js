import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Routes>
          {/* <Route exact path = '/' component={Home} /> */}
          <Route exact path = '/' element={<AboutMe />} />
          <Route exact path = '/portfolio' element={<Portfolio />} />
          <Route exact path = '/contact' element={<Contact />} />
          <Route exact path = '/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
