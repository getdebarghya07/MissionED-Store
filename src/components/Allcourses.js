import React from "react";
import "./Allcourses.css";
import studypng from "../images/study.png";
import entrepreneurs from "../images/entrepreneneurs.jpg";
import Consulting from "../images/Consulting.jpg";
import Finance from "../images/Finance.jpg";
import datascience from "../images/datascience.jpg";
import s8 from "../images/8.jpg";
import s9 from "../images/9.jpg";
import s10 from "../images/10.jpg";
import s11 from "../images/11.jpg";
import s12 from "../images/12.jpg";
import iitb from "../images/LOGO_IIT_BOMBAY.jpg";
import iitkgp from "../images/IIT_KHARAGPUR.png";
import iitk from "../images/LOGO_IIT_KANPUR.jpg";
import iitd from "../images/LOGO_IIT_DELHI.jpg";

function Allcourses() {
  return (
    <div>
      <div className="header">
        <div className="image-section">
          <img
            className="img-fluid mr-5 aos-init aos-animate"
            src={studypng}
            alt="study"
          />
        </div>
        <div className="headerButtons ">
          <h1 className="tagline text-center aos-init aos-animate static-txt">
            Learn From The Best
          </h1>

          <ul className="dynamic-txts">
            <li>
              <span>Experts</span>
            </li>
            <li>
              <span>Tutors</span>
            </li>
            <li>
              <span>Guides</span>
            </li>
          </ul>
          <b></b>
        </div>
        <div id="bootstrap-overrides" className="phonenumm ">
          <div className="buttonInn">
            <input id="bootstrap-overrides" className="form--control" />
           
          </div>
        </div>
      </div>
      <b></b>

      <div className="ourcourses">
        <h1 className="ourcoursesheading">OUR COURSES</h1>
        <h2 className="courseheadh2">for college students</h2>
      </div>

      <div className="bodyy">
        <div className="containerr">
          <div className="course-card">
            <div className="imgBxx">
              <img src={entrepreneurs} alt="1st" />
            </div>
            <div className="content">
              <h2>Entrepreneurship</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="course-card">
            <div className="imgBxx">
              <img src={Consulting} alt="2nd" />
            </div>
            <div className="content">
              <h2>Consulting</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="course-card">
            <div className="imgBxx">
              <img src={Finance} alt="3rd" />
            </div>
            <div className="content">
              <h2>Finance</h2>
              <p>
                "If you want to thrive in today's economy, you must challenge
                the status quo and get the financial education necessary to
                succeed."
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="imgBxx">
              <img src={datascience} alt="4th" />
            </div>
            <div className="content">
              <h2>Datascience</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>

      {/* school */}

      <div className="ourcourses">
        <h1 className="ourcoursesheading">OUR COURSES</h1>
        <h2 className="courseheadh2">for Schoool students</h2>
      </div>

      <div className="bodyy">
        <div className="containerr">
          <div className="course-card">
            <div className="imgBxx">
              <img src={s8} alt="1st" />
            </div>
            <div className="content">
              <h2>Class 8</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="course-card">
            <div className="imgBxx">
              <img src={s9} alt="2nd" />
            </div>
            <div className="content">
              <h2>Class 9</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="course-card">
            <div className="imgBxx">
              <img src={s10} alt="3rd" />
            </div>
            <div className="content">
              <h2>Class 10</h2>
              <p>
                "If you want to thrive in today's economy, you must challenge
                the status quo and get the financial education necessary to
                succeed."
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="imgBxx">
              <img src={s11} alt="4th" />
            </div>
            <div className="content">
              <h2>Class 11</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="course-card">
            <div className="imgBxx">
              <img src={s12} alt="4th" />
            </div>
            <div className="content">
              <h2>Class 12</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>

      {/*alma mater */}
      <div className="ourcourses">
        <h1 className="ourcoursesheading">ALMA MATER OF OUR FACULTY MEMBERS</h1>
        {/* <h2 className="courseheadh2">for Schoool students</h2> */}
      </div>

      <div className="bodyy">
        <div className="containerr">
          <div className="course-card">
            <div className="imgBxx">
              <img src={iitb} alt="1st" />
            </div>
            <div className="content">
              <h2>IIT BOMBAY</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="course-card">
            <div className="imgBxx">
              <img src={iitkgp} alt="2nd" />
            </div>
            <div className="content">
              <h2>IIT KHARAGPUR</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="course-card">
            <div className="imgBxx">
              <img src={iitk} alt="3rd" />
            </div>
            <div className="content">
              <h2>IIT KANPUR</h2>
              <p>
                "If you want to thrive in today's economy, you must challenge
                the status quo and get the financial education necessary to
                succeed."
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="imgBxx">
              <img src={iitd} alt="4th" />
            </div>
            <div className="content">
              <h2>IIT DELHI</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allcourses;
