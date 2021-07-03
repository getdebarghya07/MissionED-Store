import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { Button } from "./Button";
import "./Navbar.css";
import GoToHome from "./GoToHome";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav id="bootstrap-overrides" className="Navbar">
        <div className="Navbar-container">
          

          <Link to="/" className="Navbar-logo" onClick={closeMobileMenu}>
            <img
              src="https://www.missioned.in/static/media/NavigationLogo.19c19c2f.svg"
              alt="logo"
              class="logo "
            />
            <span
              id="bootstrap-overrides"
              class="missioned-nav  font-weight-bold"
            >
              Mission<span class="ed">Ed</span>
            </span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav--menu active" : "nav--menu"}>
            <li className="nav--item ">
              <GoToHome className="nav--links"></GoToHome>
            </li>

            <li className="nav--item">
              <Link
                activeClass="active"
                spy={true}
                offset={0}
                duration={500}
                to="missioned-pro"
                smooth={true}
                className="nav--links"
                onClick={closeMobileMenu}
              >
                MissionEd Pro
                <span class="badge badge-danger"> New</span>
              </Link>
            </li>

            <li className="nav--item">
              <Link
                activeClass="active"
                spy={true}
                offset={0}
                duration={500}
                to="store"
                smooth={true}
                className="nav--links"
                onClick={closeMobileMenu}
              >
                Store
              </Link>
            </li>

            <li className="nav--item">
              <Link
                activeClass="active"
                spy={true}
                offset={0}
                duration={500}
                to="courses"
                smooth={true}
                className="nav--links"
                onClick={closeMobileMenu}
              >
                Courses
              </Link>
            </li>

            <li className="nav--item">
              <Link
                activeClass="active"
                spy={true}
                offset={0}
                duration={500}
                to="contact"
                smooth={true}
                className="nav--links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/Sign-up"
                className="nav--links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
