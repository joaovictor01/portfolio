import React from "react";
// import Typical from 'react-typical'
import { useTypewriter } from "react-simple-typewriter";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: [
      "Desenvolvedor Backend 🚀",
      "Desenvolvedor Python",
      "Desenvolvedor Full-Stack",
      "Desenvolvedor Backend (Django, Flask, FastAPI)",
      "Desenvolvedor Frontend (React)",
      "Desenvolvedor Mobile (Dart/Flutter e React Native)📱",
    ],
    loop: {},
    typeSpeed: 75,
    deleteSpeed: 25,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-victor-souza-paes-495246112"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://github.com/joaovictor01"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Olá, Eu sou <span className="highlighted-text">João Victor</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "var(--light-foreground)",
                    marginLeft: "5px",
                  }}
                >
                  {typeEffect}
                </span>
              </h1>
              <span className="profile-role-tagline">
                Sou desenvolvedor Full-Stack, com experiência de 4 anos com
                Python no backend.
              </span>
              <br />
              <span className="profile-role-tagline">
                Eu desenvolvo aplicações backend com Python e frontend com
                React.
              </span>
            </span>
          </div>

          <div className="profile-options">
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

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
