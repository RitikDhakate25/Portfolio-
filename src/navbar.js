import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faWhatsapp, faYoutube, faSquareSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faCircleInfo, faPhone, faCheckCircle, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';


library.add(faFacebook, faInstagram, faWhatsapp, faYoutube, faSquareSnapchat, faHouse, faCircleInfo, faPhone, faCheckCircle, faHandshakeAngle);

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  // useEffect to set active link based on current path
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") setActiveLink("Home");
    else if (path === "/about") setActiveLink("About");
    else if (path === "/contact") setActiveLink("Contact");
    else if (path === "/help") setActiveLink("Help");
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
        <div className="container-fluid">
          <a>
            <img src="./images/rrd.jpeg" alt="Brand" width="30px" height="30px" style={{ borderRadius: 50 }} />
          </a>

          <button
            className="navbar-toggler custom-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={`cavets nav-link ${activeLink === "Home" ? "active-link" : ""}`} href="/"data-aos="fade-up" data-aos-duration="1000"><FontAwesomeIcon icon={faHouse} className="" />  Home</a>
              </li>
              <li className="nav-item">
                <a className={`cavets nav-link ${activeLink === "About" ? "active-link" : ""}`} href="/About"data-aos="fade-up" data-aos-duration="1000"><FontAwesomeIcon icon={faCircleInfo} className="" /> About</a>
              </li>
              <li className="nav-item">
                <a className={`cavets nav-link ${activeLink === "Contact" ? "active-link" : ""}`} href="/Contact"data-aos="fade-up" data-aos-duration="1000"><FontAwesomeIcon icon={faPhone} className="" /> Contact</a>
              </li>
              <li className="nav-item">
                <a className={`cavets nav-link ${activeLink === "Help" ? "active-link" : ""}`} href="/Help"data-aos="fade-up" data-aos-duration="1000">
                  <FontAwesomeIcon icon={faWhatsapp}  className="" /> Help us
                </a>
              </li>
            </ul>
          </div>

          <div className="offcanvas offcanvas-end d-lg-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <img src="./images/rrd.jpeg" alt="" width="50px" height="50px" style={{ borderRadius: 50, }} />
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className={`cavets nav-link ${activeLink === "Home" ? "active-link" : ""}`} href="/"><FontAwesomeIcon icon={faHouse} className="" /> Home</a>
                </li>
                <li className="nav-item">
                  <a className={`cavets nav-link ${activeLink === "About" ? "active-link" : ""}`} href="/About"><FontAwesomeIcon icon={faCircleInfo} className="" /> About</a>
                </li>
                <li className="nav-item">
                  <a className={`cavets nav-link ${activeLink === "Contact" ? "active-link" : ""}`} href="/Contact"><FontAwesomeIcon icon={faPhone} className="" /> Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}