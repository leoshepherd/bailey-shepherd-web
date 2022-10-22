import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <body>
      <nav>
        <div id="nav-logo" class="nav-element">
          <a href='#'>
            <FontAwesomeIcon icon={faHouse} fontSize={"2.5rem"}></FontAwesomeIcon>
          </a>
        </div>
        <div id="nav-link" class="nav-element">
          <a href='#'>ABOUT</a>
          <a href='#'>WORK</a>
        </div>
        <div id="nav-social" class="nav-element"></div>
        <div id="nav-contact" class="nav-element">
          <a href='#'>CONTACT ME</a>
        </div>
      </nav>
      <main>
        <article>
          <div class="article-image article-section"></div>
          <div class="article-description article-section"></div>
          <div class="article-title article-section"></div>
          <div class="article-nav article-section"></div>
        </article>
      </main>
    </body>
  );
}

export default App;
