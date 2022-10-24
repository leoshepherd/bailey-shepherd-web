import './App.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import Home from './Home';
import Work from './Work';
import About from './About';



function App() {
  var pages = {
    "home": <Home/>,
    "work": <Work/>,
    "about": <About/>
  }
  const [pageState, setPage] = useState('home');
  let page = pages[pageState]
  return (
    <body>
      <nav>
        <div id="nav-logo" class="nav-element">
          <button onClick={() => setPage('home')}>
            <FontAwesomeIcon icon={faHouse} fontSize={"2.5rem"}/>
          </button>
        </div>
        <div id="nav-link" class="nav-element">
          <button onClick={() => setPage('about')}>ABOUT</button>
          <button onClick={() => setPage('work')}>WORK</button>
        </div>
        <div id="nav-social" class="nav-element">
          <a href='https://www.linkedin.com/in/bailey-shepherd-560500218'>
            <FontAwesomeIcon icon={faLinkedin} fontSize={"2rem"}/>
          </a>
          <a href='https://github.com/leoshepherd'>
            <FontAwesomeIcon icon={faGithub} fontSize={"2rem"}/>
          </a>
        </div>
        <div id="nav-contact" class="nav-element">
          <button onClick={() => setPage('home')}>CONTACT ME</button>
        </div>
      </nav>
      {page}
    </body>
  );
}

export default App;
