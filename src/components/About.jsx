import React, { useState } from "react";
import "./styles/About.css";
import { Link } from "react-router-dom";

import Modal from "./Modal";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="initial-container-info">
        <h6 className="center mb-5">Meet our team</h6>
        <hr className="line" />
        <h2 className="center mt-5 mb-5">About us</h2>
        <hr className="line" />
        <div className="logo" onClick={openModal}>
          <img className="logo logoimg" src={require("./img/logo.png")} />
        </div>
        <div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>MENU CONTENT</h2>
            <Link className="link" to="/">
              <h1 className="title-header mt-3">HOME</h1>
            </Link>
            <Link className="link" to="/">
              <h1 className="title-header mt-3">CREATE EVENT</h1>
            </Link>
            <Link className="link" to="/about">
              <h1 className="title-header mt-3">ABOUT</h1>
            </Link>
          </Modal>
        </div>
      </div>

      <div className="meet-team">
        <h2 className="center mb-5">Meet our team</h2>
        <div className="row">
          <div className="profile col-md-4">
            <div className="profileImgContainer">
              <img className="profileimg" src={require("./img/nikita.jpeg")} />
            </div>
            <h6>Nikita Vladimirov</h6>
          </div>
          <div className="profile col-md-4">
            <div className="profileImgContainer">
              <img className="profileimg" src={require("./img/tatenda.jpeg")} />
            </div>
            <h6>Tatenda Mudavanhu</h6>
          </div>
          <div className="profile col-md-4">
            <div className="profileImgContainer">
              <img className="profileimg" src={require("./img/lilly.jpeg")} />
            </div>
            <h6>Lilly Wallawitsch</h6>
          </div>
          <div className="profile col-md-6 justify-content-center">
            <div className="profileImgContainer">
              <img className="profileimg" src={require("./img/ava.jpeg")} />
            </div>
            <h6>Ava Hurst</h6>
          </div>
          <div className="profile col-md-6">
            <div className="profileImgContainer">
              <img className="profileimg" src={require("./img/mercedes.jpg")} />
            </div>
            <h6>Mercedes Torrendell</h6>
          </div>
        </div>
      </div>
      <div className="info">
        <p className="paragraph">
          As the CeraSync team, our passion lies in power of human connection
          and the timeless artistry of ceramics. <br /> <br />
          Coming from Berlin's CODE University of Applied Sciences, we, a group
          of five students, delved into the world of ceramics, creating
          CeraSync. <br /> This Ceramic Event Platform was born from our
          exploration of the beautiful and diverse ceramics community, with the
          intent of providing a space for all individuals to come together,
          fostering connections and discovering like- mided spirits. <br />{" "}
          <br /> The contact to the soil of ceramics has not only therapeutic
          effect, the shared journey of creation and artistic expression, in our
          view, creates the most beautiful form of connection. <br /> <br /> We
          invite you to use our platform to not only share your knowledge but
          also to participate in the crafting of beautiful gatherings. Let's
          celebrate the art of ceramics, build meaningful connections, and
          invent shared experiences, all grounded in the down-to-earth beauty of
          this ancient tradition of ceramics.
        </p>
      </div>
    </>
  );
}

export default About;
