import React, { useEffect } from "react";
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

  const backgroundEffect = () => {
    // init
    const homeContainer = document.getElementsByClassName("home-container")[0];
    const profileContainer =
      document.getElementsByClassName("profile-container")[0];
    const headerContainer =
      document.getElementsByClassName("header-container")[0];
    var maxx =
      document.getElementsByClassName("profile-container")[0].clientWidth;
    var maxy =
      document.getElementsByClassName("profile-container")[0].clientHeight;
    var halfx = maxx / 2;
    var halfy = maxy / 2;
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "profileCanvas");

    // let canvas = document.getElementsByClassName("profile-container")[0];
    homeContainer.appendChild(canvas);
    canvas.style.x = profileContainer.style.x;
    canvas.style.y = profileContainer.style.y;
    canvas.width = maxx;
    canvas.style.height = homeContainer.offsetHeight + "px";
    canvas.style.maxHeight = homeContainer.offsetHeight + "px";
    canvas.style.minHeight = homeContainer.offsetHeight + "px";
    var context = canvas.getContext("2d");
    var dotCount = 200;
    var dots = [];
    // create dots
    for (var i = 0; i < dotCount; i++) {
      dots.push(new dot());
    }

    // dots animation
    function render() {
      context.fillStyle = "#000000";
      context.fillRect(0, 0, maxx, maxy);
      for (var i = 0; i < dotCount; i++) {
        dots[i].draw();
        dots[i].move();
      }
      requestAnimationFrame(render);
    }

    // dots class
    // @constructor
    function dot() {
      this.rad_x = 2 * Math.random() * halfx + 1;
      this.rad_y = 1.2 * Math.random() * halfy + 1;
      this.alpha = Math.random() * 360 + 1;
      this.speed = Math.random() * 100 < 50 ? 1 : -1;
      this.speed *= 0.1;
      this.size = Math.random() * 5 + 1;
      this.color = Math.floor(Math.random() * 256);
    }

    // drawing dot
    dot.prototype.draw = function () {
      // calc polar coord to decart
      var dx = halfx + this.rad_x * Math.cos((this.alpha / 180) * Math.PI);
      var dy = halfy + this.rad_y * Math.sin((this.alpha / 180) * Math.PI);
      // set color
      context.fillStyle =
        "rgb(" + this.color + "," + this.color + "," + this.color + ")";
      // draw dot
      context.fillRect(dx, dy, this.size, this.size);
    };

    // calc new position in polar coord
    dot.prototype.move = function () {
      this.alpha += this.speed;
      // change color
      if (Math.random() * 100 < 50) {
        this.color += 1;
      } else {
        this.color -= 1;
      }
    };

    // start animation
    render();
  };

  useEffect(() => {
    backgroundEffect();
  }, []);

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
