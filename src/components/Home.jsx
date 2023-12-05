import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="initial-container-info-home">
        <h6 className="center mb-5">CERAMIC EVENT PLATFORM </h6>
        <hr className="line" />
        <h2 className="center mt-5 mb-5">
          Discover ceramic events, workshops and serene artistry
        </h2>
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
      <div className="row">
        <div className="col-6">
          <div className="row">
            <h2>Have you ever questioned what to do with burned ceramics?</h2>
          </div>
          <div className="row">
            <h1>Educational Event on how to recycle ceramics</h1>
          </div>
          <div className="row">
            <div className="col-med-6">
              <h6>Where</h6>
            </div>
            <div className="col-med-6">
              <h6>...</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-med-6">
              <h6>When</h6>
            </div>
            <div className="col-med-6">
              <h6>...</h6>
            </div>
          </div>
          <button>Check it out</button>
        </div>
        <div className="col-6">
          <img className="ceramicPhoto" src={require("./img/ceramic event.jpeg")} />
        </div>
      </div>
    </>
  );
}

export default Home;
