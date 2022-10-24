import './About.css';
import {faArrowLeftLong, faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {

  let activeIndex = 0;

  const articles = document.getElementsByClassName("about-article");


  const handleLeftClick = () => {
    const nextIndex = activeIndex == 0 ? articles.length - 1 : activeIndex - 1;

    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    currentArticle.dataset.status = "before";

    nextArticle.dataset.status = "active-from-after";
    setTimeout(() => {
      nextArticle.dataset.status = "active";
      activeIndex = nextIndex;
    })
  }

  const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 :0

    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    currentArticle.dataset.status = "after";

    nextArticle.dataset.status = "active-from-before";
    setTimeout(() => {
      nextArticle.dataset.status = "active";
      activeIndex = nextIndex;
    })
  }
  
    return (
      <main>
        <article data-index="0" data-status="active" class="about-article">
          <div id="motorcycle" class="article-image article-section"></div>
          <div class="article-description article-section"></div>
          <div class="article-title article-section"></div>
          <div class="article-nav article-section">
          <button class="nav-button" type="button" onClick={handleLeftClick}>
              <FontAwesomeIcon icon={faArrowLeftLong} fontSize={"5rem"}/>
            </button>
            <button class="nav-button" type="button" onClick={handleRightClick}>
              <FontAwesomeIcon icon={faArrowRightLong} fontSize={"5rem"}/>
            </button>
          </div>
        </article>
        <article data-index="1" data-status="before" class="about-article">
          <div class="article-image article-section"></div>
          <div class="article-description article-section"></div>
          <div class="article-title article-section"></div>
          <div class="article-nav article-section">
          <button class="nav-button" type="button" onClick={handleLeftClick}>
              <FontAwesomeIcon icon={faArrowLeftLong} fontSize={"5rem"}/>
            </button>
            <button class="nav-button" type="button" onClick={handleRightClick}>
              <FontAwesomeIcon icon={faArrowRightLong} fontSize={"5rem"}/>
            </button>
          </div>
        </article>
        <article data-index="2" data-status="before" class="about-article">
          <div class="article-image article-section"></div>
          <div class="article-description article-section"></div>
          <div class="article-title article-section"></div>
          <div class="article-nav article-section">
            <button class="nav-button" type="button" onClick={handleLeftClick}>
              <FontAwesomeIcon icon={faArrowLeftLong} fontSize={"5rem"}/>
            </button>
            <button class="nav-button" type="button" onClick={handleRightClick}>
              <FontAwesomeIcon icon={faArrowRightLong} fontSize={"5rem"}/>
            </button>
          </div>
        </article>
      </main>
    );
  }
  
  export default About;