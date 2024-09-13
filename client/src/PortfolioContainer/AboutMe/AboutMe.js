import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Sou desenvolvedor de software, trabalhando principalmente com desenvolvimento backend. Tenho vasta experiência em projetos usando Django, construção de APIs, automação, web-scrapers e crawlers com Selenium, BeautifulSoup e Scrapy. Enquanto trabalhava como programador de software backend, também trabalhei com Redis para gerir filas de jobs a serem executados, Kafka para gerir pipelines de dados. Utilizei vários tipos de bases de dados e tenho experiência com PostgreSQL, MySQL, Neo4J, MongoDB e Firebase. Além disso, também tenho experiência com Docker, Git, Gitlab CI (construindo pipelines de code quality, testes e build de projetos com Docker), Linux e Kubernetes.",
    highlights: {
      bullets: [
        "Desenvolvedor Backend (Python, Django, Flask, FastAPI)",
        "Desenvolvedor Full Stack e Mobile",
        "Python",
        "React/React Native",
        "Construção de APIs",
        "Construção de Crawlers e Web Scraper com Selenium, BeautifulSoup e Scrapy",
      ],
      heading: "Alguns destaques:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading
          title={"Sobre mim"}
          subHeading={"Por que me escolher?"}
        />
        <div className="about-me-card">
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Me contrate{" "}
              </button>
              <a
                href="curriculum_vitae.pdf"
                download="João Victor - Curriculum Vitae.pdf"
              >
                <button className="btn highlighted-btn">
                  Download Currículo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
