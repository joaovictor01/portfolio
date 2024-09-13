import React, { useState, useEffect, useRef } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Educação", logoSrc: "education.svg" },
    { label: "Histórico de trabalho", logoSrc: "work-history.svg" },
    { label: "Habilidades de Programação", logoSrc: "programming-skills.svg" },
    { label: "Projetos", logoSrc: "projects.svg" },
    { label: "Interesses", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 90 },
    { skill: "Django", ratingPercentage: 85 },
    {
      skill: "Web Scraping (Selenium, Scrapy, BeautifulSoup)",
      ratingPercentage: 80,
    },
    { skill: "Linux", ratingPercentage: 90 },
    { skill: "JavaScript", ratingPercentage: 65 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "React Native", ratingPercentage: 60 },
    { skill: "Mongo DB", ratingPercentage: 70 },
    { skill: "PostgreSQL e MySQL", ratingPercentage: 85 },
    { skill: "Java Core", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 50 },
    { skill: "Docker", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "WhatsApp BOT Disparos",
      duration: { fromDate: "2020", toDate: "2020" },
      description:
        "Desenvolvimento de BOT que envia mensagens programadas pelo WhatsApp utilizando Python e Selenium, com site para para cadastro, uso e compra do serviço utilizando Django.",
      subHeading: "Tecnologias usadas: Python, Selenium, Django",
    },
    {
      title: "Website para agendamentos de presença",
      duration: { fromDate: "2020", toDate: "2022" },
      description:
        "Desenvolvimento de website com Django e API utilizando Django Rest Framework para agendamentos de presença no escritório.",
      subHeading:
        "Tecnologias usadas: Python, Django, Django Rest Framework (DRF)",
    },
    {
      title: "Crawlers e Web Scrapers",
      duration: { fromDate: "2022", toDate: "2024" },
      description:
        "Desenvolvimento de crawlers e web scrapers utilizando Python e Selenium para extrair informações de diversas redes sociais.",
      subHeading: "Tecnologias usadas: Python, Selenium",
    },
    {
      title: "Website de Portfólio Pessoal com React JS",
      duration: { fromDate: "2024", toDate: "2024" },
      description: "Desenvolvimento do meu website de portfólio com React JS.",
      subHeading: "Tecnologias usadas: React JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    // Education
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Ciência da Computação"}
        subHeading={"Interrompido"}
        fromDate={"2016"}
        toDate={" "}
      />

      <ResumeHeading
        heading={"Ensino Médio"}
        subHeading={"Colégio Objetivo de Tupi Paulista"}
        fromDate={"2011"}
        toDate={"2013"}
      />

      <ResumeHeading
        heading={"Inglês"}
        subHeading={
          "CCAA - Oral and Written Comunication Course - Native Like Fluency"
        }
        fromDate={" "}
        toDate={"2011"}
      />

      <ResumeHeading
        heading={"Hardware"}
        subHeading={"CDI - Cursos e Treinamentos"}
        fromDate={"2010"}
        toDate={"2011"}
      />
    </div>,

    // Work Experience
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Kryptus"}
          subHeading={"Desenvolvedor de Software Backend Estágio"}
          fromDate={"2022"}
          toDate={"2024"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            Desenvolvimento web com Django Criação e manutenção de APIs com
            Django Rest Framework (DRF) e FastAPI Desenvolvimento e manutenção
            de crawlers, web scrapers, com Selenium
          </span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">
            - Elaboração de containers com Docker
          </span>
          <br />

          <span className="resume-description-text">
            - Trabalhei com Redis para gerenciar filas de jobs Utilizei Kafka
            para gerenciar pipelines de dados Trabalhei com banco de dados de
            grafos Neo4J e PostgreSQL para os outros dados.
          </span>
          <br />

          <span className="resume-description-text">
            - Usei OpenAPI para documentar as APIs. Realização de testes com
            PyTest. Utilizei flake8, black e mypy para manter os padrões de
            código.
          </span>
          <br />

          <span className="resume-description-text">
            - Utilizei Poetry para gerenciar pacotes e dependências.
          </span>
          <br />

          <span className="resume-description-text">
            - Utilizei Gitlab para controle de versão e Gitlab CI para
            elaboração de pipelines de code quality, testes e build de imagens
            Docker.
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"SSYS Sistemas e Soluções Tecnológicas LTDA"}
          subHeading={"Desenvolvedor de Software Backend Jr"}
          fromDate={"2020"}
          toDate={"2022"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            Desenvolvimento web com Django.
          </span>
          <br />
          <span className="resume-description-text">
            Criação e manutenção de APIs com Django Rest Framework (DRF)
          </span>
          <br />
          <span className="resume-description-text">
            Criação de Software para Desktop com Python e Tkinter na GUI.
          </span>
          <br />
          <span className="resume-description-text">
            Elaboração de containers com docker e docker-compose
          </span>
          <br />
          <span className="resume-description-text">
            Programação de Crawlers com Scrapy
          </span>
          <br />
        </div>
      </div>
    </div>,

    // Programming Skills
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    // Projects
    <br />,
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    <br />,

    // Interests
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Aprender e Programar"
        description="Gosto de aprender e melhorar minhas habilidades de programação, fazendo projetos pessoais para treinar e aprender novas tecnologias."
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 600;
    if (window.innerWidth <= 768) {
      offsetHeight = 700;
    }
    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="bullet-logo"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  // useEffect(() => {
  //   return () => {
  //     /* UNSUBSCRIBE THE SUBSCRIPTIONS */
  //     fadeInSubscription.unsubscribe();
  //   };
  // }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Currículo"}
          subHeading={"Detalhes formais sobre mim"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
