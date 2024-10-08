import React, { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./ContactMe.css";
import imgBack from "../../assets/Images/mailz.jpeg";
import load1 from "../../assets/Images/load2.gif";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const [typeEffect] = useTypewriter({
    words: ["Entre em contato 📧"],
    loop: {},
    typeSpeed: 75,
    deleteSpeed: 40,
  });

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      // let backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL
      //   ? process.env.REACT_APP_BACKEND_BASE_URL
      //   : "https://joaovictorspportfoliobackend.netlify.app";
      // let backendBaseUrl = "https://joaovictorspportfoliobackend.netlify.app";
      const client = axios.create({
        baseUrl: "https://joaovictorspportfoliobackend.netlify.app",
      });
      const res = await client.post("/contact/", data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
        resetFields();
      }
    } catch (error) {}
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Contato"} subHeading={"Vamos manter contato"} />
      <div className="central-form">
        <div className="col">
          {" "}
          <h2 className="title">
            <span
              style={{
                fontWeight: "bold",
                color: "var(--light-foreground",
                marginLeft: "5px",
              }}
            >
              {typeEffect}
            </span>
          </h2>
          {/* <h2 className="title">
            <Typical loop={Infinity} steps={["Entre em contato 📧", 1000]} />
          </h2>{" "} */}
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
        <div className="back-form">
          <div className="img-back">
            <h4>Envie seu e-mail aqui!</h4>
            <img src={imgBack} alt="email-img" />
          </div>

          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Nome</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Mensagem</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Enviar
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="loading" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
